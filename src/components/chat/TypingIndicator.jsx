export default function TypingIndicator() {
  return (
    <div className="flex justify-start animate-popIn">
      <div className="flex items-center gap-1.5 rounded-r-2xl rounded-tl-bubbleTL rounded-bl-2xl border border-line bg-panel px-4 py-3">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * 0.15}s` }}
            className="h-1.5 w-1.5 animate-typingDot rounded-full bg-muted"
          />
        ))}
      </div>
    </div>
  );
}
