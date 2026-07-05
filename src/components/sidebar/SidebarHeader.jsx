"use client";

import { Search, SquarePen } from "lucide-react";
import ThemeToggle from "@/src/components/theme/ThemeToggle";
import SignOutButton from "./SignOutButton";

export default function SidebarHeader({ query, onQueryChange }) {
  return (
    <div className="flex flex-col gap-3 border-b border-line bg-panel px-4 pb-3 pt-4">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-lg font-semibold tracking-tight text-ink">
          Chatter
        </h1>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="New chat"
            title="New chat"
            className="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-panelAlt hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-jade"
          >
            <SquarePen size={17} />
          </button>
          <ThemeToggle />
          <SignOutButton />
        </div>
      </div>

      <label className="relative block">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search conversations"
          className="w-full rounded-lg border border-line bg-panelAlt py-2 pl-9 pr-3 text-sm text-ink placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-jade"
        />
      </label>
    </div>
  );
}
