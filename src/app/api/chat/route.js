import OpenAI from "openai";
import { headers } from "next/headers";
import { and, asc, eq } from "drizzle-orm";

import { auth } from "@/src/lib/auth";
import { db } from "@/src/db";
import { conversations, messages } from "@/src/db/schema";
import {SYSTEM_PROMPTS} from "@/src/data/prompts"
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


async function getSession() {
    return auth.api.getSession({
        headers: await headers(),
    });
}

export async function GET(request) {
    try {
        const session = await getSession();

        if (!session?.user) {
            return Response.json(
                {
                    success: false,
                    error: "Unauthorized",
                },
                {
                    status: 401,
                }
            );
        }

        const { searchParams } = new URL(request.url);

        const persona = searchParams.get("persona");

        if (!persona) {
            return Response.json(
                {
                    success: false,
                    error: "Persona is required.",
                },
                {
                    status: 400,
                }
            );
        }

        const conversation = await db
            .select()
            .from(conversations)
            .where(
                and(
                    eq(conversations.userId, session.user.id),
                    eq(conversations.persona, persona)
                )
            )
            .limit(1);

        if (conversation.length === 0) {
            return Response.json({
                success: true,
                messages: [],
            });
        }

        const history = await db
            .select()
            .from(messages)
            .where(eq(messages.conversationId, conversation[0].id))
            .orderBy(asc(messages.createdAt));

        return Response.json({
            success: true,
            messages: history.map((message) => ({
                id: message.id,
                sender: message.role === "user" ? "me" : "them",
                text: message.content,
                time: new Intl.DateTimeFormat("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                }).format(message.createdAt),
            })),
        });
    } catch (err) {
        console.error(err);

        return Response.json(
            {
                success: false,
                error: err.message,
            },
            {
                status: 500,
            }
        );
    }
}

export async function POST(request) {
    try {
        const session = await getSession();

        if (!session?.user) {
            return Response.json(
                {
                    success: false,
                    error: "Unauthorized",
                },
                {
                    status: 401,
                }
            );
        }

        const { persona, message } = await request.json();

        if (!persona || !message?.trim()) {
            return Response.json(
                {
                    success: false,
                    error: "Persona and message are required.",
                },
                {
                    status: 400,
                }
            );
        }

        const systemPrompt =
            SYSTEM_PROMPTS[persona] ?? SYSTEM_PROMPTS.software;

        // Find existing conversation
        const existingConversation = await db
            .select()
            .from(conversations)
            .where(
                and(
                    eq(conversations.userId, session.user.id),
                    eq(conversations.persona, persona)
                )
            )
            .limit(1);

        let conversationId;

        if (existingConversation.length === 0) {
            conversationId = crypto.randomUUID();

            await db.insert(conversations).values({
                id: conversationId,
                userId: session.user.id,
                persona,
            });
        } else {
            conversationId = existingConversation[0].id;
        }

        // Save the user's message
        await db.insert(messages).values({
            id: crypto.randomUUID(),
            conversationId,
            role: "user",
            content: message,
        });

        // Load the conversation history
        const history = await db
            .select()
            .from(messages)
            .where(eq(messages.conversationId, conversationId))
            .orderBy(asc(messages.createdAt));

        // Convert DB messages into OpenAI format
        const conversationHistory = history.map((item) => ({
            role: item.role,
            content: item.content,
        }));

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",

            messages: [
                {
                    role: "system",
                    content: `${systemPrompt}

Think carefully before answering.
Do not reveal your internal reasoning.
Return only the final answer.`,
                },

                ...conversationHistory,
            ],
        });

        const reply = completion.choices[0].message.content?.trim();

        if (!reply) {
            return Response.json(
                {
                    success: false,
                    error: "The model returned an empty response.",
                },
                {
                    status: 500,
                }
            );
        }

        await db.insert(messages).values({
            id: crypto.randomUUID(),
            conversationId,
            role: "assistant",
            content: reply,
        });

        return Response.json({
            success: true,
            reply,
        });
    } catch (err) {
        console.error(err);

        return Response.json(
            {
                success: false,
                error: err.message,
            },
            {
                status: 500,
            }
        );
    }
}