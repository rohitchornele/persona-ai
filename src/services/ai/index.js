import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "GEMINI_API_KEY",
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

const SYSTEM_PROMPT = "You are a helpful assistant.";

const response = await openai.chat.completions.create({
    model: "gemini-3.1-flash-lite",
    messages: [
        {   role: "system",
            content: SYSTEM_PROMPT, 
        },
        {
            role: "user",
            content: "Explain to me how AI works",
        },
    ],
});

console.log(response.choices[0].message);