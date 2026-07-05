import { ArrowLeft, Phone, Video, MoreVertical } from "lucide-react";
import Avatar from "@/src/components/sidebar/Avatar";

export default function ChatHeader({ contact, isTyping, onBack }) {
  return (
    <div className="flex items-center justify-between border-b border-line bg-panel px-5 py-3">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to conversations"
          className="-ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-panelAlt hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-jade md:hidden"
        >
          <ArrowLeft size={18} />
        </button>
        <Avatar name={contact.name} accent={contact.accent} online={contact.online} size="sm" />
        <div>
          <p className="font-display font-semibold leading-tight text-ink">
            {contact.name}
          </p>
          <p className="text-xs leading-tight text-muted">
            {isTyping ? (
              <span className="text-jade">typing…</span>
            ) : contact.online ? (
              "Online"
            ) : (
              contact.title
            )}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 text-muted">
        <button
          type="button"
          aria-label="Voice call"
          title="Voice call"
          className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-panelAlt hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-jade"
        >
          <Phone size={17} />
        </button>
        <button
          type="button"
          aria-label="Video call"
          title="Video call"
          className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-panelAlt hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-jade"
        >
          <Video size={17} />
        </button>
        <button
          type="button"
          aria-label="More options"
          title="More options"
          className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-panelAlt hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-jade"
        >
          <MoreVertical size={17} />
        </button>
      </div>
    </div>
  );
}
