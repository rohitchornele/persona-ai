import ThemeToggle from "@/src/components/theme/ThemeToggle";
import LaunchChatButton from "../buttons/LaunchChatButton";

export default function NavbarActions() {
  return (
    <div className="hidden items-center gap-3 md:flex">
      <ThemeToggle />

      <LaunchChatButton className="rounded-full bg-jade px-4 py-2 text-sm font-medium text-panel transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-jade focus-visible:ring-offset-2 focus-visible:ring-offset-panel" />
    </div>
  );
}