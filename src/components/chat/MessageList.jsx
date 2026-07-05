"use client";

import { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

export default function MessageList({ messages, isTyping }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, isTyping]);

  return (
    <div className="thin-scroll flex-1 overflow-y-auto px-4 py-4 sm:px-8">
      <div className="mx-auto flex max-w-2xl flex-col gap-2.5">
        <div className="mb-2 flex justify-center">
          <span className="rounded-full bg-panelAlt px-3 py-1 text-[11px] font-medium text-muted">
            Today
          </span>
        </div>

        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}

        {isTyping && <TypingIndicator />}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
