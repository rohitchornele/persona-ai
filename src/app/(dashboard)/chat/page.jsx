"use client";

import { useEffect, useMemo, useState } from "react";

import Sidebar from "@/src/components/sidebar/Sidebar";
import ChatWindow from "@/src/components/chat/ChatWindow";

import { PERSONAS } from "@/src/data/contacts";

export default function ChatPage() {
  const [contacts] = useState(PERSONAS);

  const [activeId, setActiveId] = useState(PERSONAS[0]?.id ?? null);

  const [messages, setMessages] = useState([]);

  const [typing, setTyping] = useState(false);

  const activeContact = useMemo(() => {
    return contacts.find((contact) => contact.id === activeId) ?? null;
  }, [contacts, activeId]);

  useEffect(() => {
    if (!activeContact) return;

    loadConversation(activeContact.persona);
  }, [activeContact]);

  async function loadConversation(persona) {
    try {
      const response = await fetch(
        `/api/chat?persona=${encodeURIComponent(persona)}`
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      setMessages(data.messages);
    } catch (error) {
      console.error(error);
      setMessages([]);
    }
  }

  async function handleSend(text) {
    if (!activeContact) return;

    const optimisticMessage = {
      id: crypto.randomUUID(),
      sender: "me",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Show the user's message immediately.
    setMessages((prev) => [...prev, optimisticMessage]);

    setTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          persona: activeContact.persona,
          message: text,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      const assistantMessage = {
        id: crypto.randomUUID(),
        sender: "them",
        text: data.reply,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          sender: "them",
          text: "Sorry, something went wrong.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setTyping(false);
    }
  }

  return (
    <main className="flex h-dvh items-center justify-center bg-backdrop p-0 md:p-6">
      <div className="flex h-full w-full overflow-hidden bg-panel shadow-none md:h-[92vh] md:max-w-6xl md:rounded-2xl md:border md:border-line md:shadow-app">
        <div
          className={`h-full w-full md:w-auto md:flex ${
            activeId ? "hidden md:flex" : "flex"
          }`}
        >
          <Sidebar
            contacts={contacts}
            activeId={activeId}
            onSelect={setActiveId}
          />
        </div>

        <div
          className={`h-full w-full ${
            activeId ? "flex" : "hidden md:flex"
          }`}
        >
          <ChatWindow
            contact={activeContact}
            messages={messages}
            isTyping={typing}
            onSend={handleSend}
            onBack={() => setActiveId(null)}
          />
        </div>
      </div>
    </main>
  );
}