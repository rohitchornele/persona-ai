import { CheckCheck } from "lucide-react";

export default function MessageBubble({ message }) {
  const isMe = message.sender === "me";

  return (
    <div
      className={`flex animate-popIn ${isMe ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[75%] px-3.5 py-2 shadow-sm sm:max-w-[65%] ${
          isMe
            ? "rounded-l-2xl rounded-tr-bubbleTL rounded-br-2xl bg-jade text-panel"
            : "rounded-r-2xl rounded-tl-bubbleTL rounded-bl-2xl border border-line bg-panel text-ink"
        }`}
      >
        <p className="whitespace-pre-wrap break-words text-[0.925rem] leading-relaxed">
          {message.text}
        </p>
        <div
          className={`mt-1 flex items-center justify-end gap-1 font-mono text-[10px] ${
            isMe ? "text-panel/75" : "text-muted"
          }`}
        >
          <span>{message.time}</span>
          {isMe && <CheckCheck size={13} />}
        </div>
      </div>
    </div>
  );
}
