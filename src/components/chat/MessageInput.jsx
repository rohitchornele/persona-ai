"use client";

import { useState } from "react";
import { Paperclip, Send, Smile } from "lucide-react";

export default function MessageInput({ onSend }) {
  const [value, setValue] = useState("");

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="border-t border-line bg-panel px-4 py-3 sm:px-8">
      <div className="mx-auto flex max-w-2xl items-end gap-2">
        <button
          type="button"
          aria-label="Attach file"
          title="Attach file"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-panelAlt hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-jade"
        >
          <Paperclip size={18} />
        </button>

        <div className="flex flex-1 items-end gap-2 rounded-2xl border border-line bg-panelAlt px-3 py-2">
          <button
            type="button"
            aria-label="Emoji"
            title="Emoji"
            className="flex h-6 w-6 shrink-0 items-center justify-center text-muted transition-colors hover:text-ink focus:outline-none"
          >
            <Smile size={18} />
          </button>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message"
            rows={1}
            className="max-h-32 flex-1 resize-none bg-transparent py-1 text-sm text-ink placeholder:text-muted focus:outline-none"
          />
        </div>

        <button
          type="button"
          onClick={submit}
          disabled={!value.trim()}
          aria-label="Send message"
          title="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-jade text-panel transition-transform enabled:hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-jade focus-visible:ring-offset-2 focus-visible:ring-offset-panel"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}
