import {
    pgTable,
    text,
    timestamp,
    unique,
} from "drizzle-orm/pg-core";
import { user } from "../auth/auth-schema";


export const conversations = pgTable(
    "conversations",
    {
        id: text("id").primaryKey(),

        userId: text("user_id")
            .notNull()
            .references(() => user.id, {
                onDelete: "cascade",
            }),

        persona: text("persona").notNull(),

        createdAt: timestamp("created_at")
            .defaultNow()
            .notNull(),

        updatedAt: timestamp("updated_at")
            .defaultNow()
            .$onUpdate(() => new Date())
            .notNull(),
    },
    (table) => ({
        uniqueConversation: unique().on(table.userId, table.persona),
    })
);

export const messages = pgTable("messages", {
    id: text("id").primaryKey(),

    conversationId: text("conversation_id")
        .notNull()
        .references(() => conversations.id, {
            onDelete: "cascade",
        }),

    role: text("role").notNull(),

    content: text("content").notNull(),

    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),

    updatedAt: timestamp("updated_at")
        .defaultNow()
        .$onUpdate(() => new Date())
        .notNull(),
});