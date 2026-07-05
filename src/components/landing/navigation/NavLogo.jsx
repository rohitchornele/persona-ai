import { MessageCircle } from "lucide-react";

export default function NavLogo() {
  return (
    <a
      href="#top"
      className="flex items-center gap-2"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-jade text-panel">
        <MessageCircle size={17} />
      </span>

      <span className="font-display text-lg font-semibold tracking-tight text-ink">
        Chatter
      </span>
    </a>
  );
}