import ThemeToggle from "@/src/components/theme/ThemeToggle";
import LaunchChatButton from "../buttons/LaunchChatButton";

export default function MobileMenu({
  links,
  onClose,
}) {
  return (
    <div className="border-t border-line bg-panel px-4 pb-4 pt-2 md:hidden">
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={onClose}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-panelAlt hover:text-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-3">
        <ThemeToggle />

        <LaunchChatButton className="flex-1 rounded-full bg-jade px-4 py-2.5 text-sm font-medium text-panel transition-transform hover:scale-[1.02]" />
      </div>
    </div>
  );
}