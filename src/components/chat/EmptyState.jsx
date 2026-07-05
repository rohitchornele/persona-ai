import { MessageCircle } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-3 bg-panelAlt px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-jade/15 text-jade">
        <MessageCircle size={26} />
      </div>
      <p className="font-display text-lg font-semibold text-ink">
        Select a conversation
      </p>
      <p className="max-w-xs text-sm text-muted">
        Choose someone from your contact list to see the conversation and
        keep chatting.
      </p>
    </div>
  );
}
