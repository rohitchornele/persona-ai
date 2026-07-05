"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    // Reserve the space so layout doesn't shift once client-side theme resolves.
    return <div className="h-9 w-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panelAlt text-muted transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-jade"
    >
      <Sun
        size={17}
        className={`absolute transition-all duration-300 ${
          isDark
            ? "scale-0 -rotate-90 opacity-0"
            : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <Moon
        size={17}
        className={`absolute transition-all duration-300 ${
          isDark
            ? "scale-100 rotate-0 opacity-100"
            : "scale-0 rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
