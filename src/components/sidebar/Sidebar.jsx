"use client";

import { useMemo, useState } from "react";
import SidebarHeader from "./SidebarHeader";
import ContactList from "./ContactList";
import SidebarProfile from "./SidebarProfile";

export default function Sidebar({ contacts, activeId, onSelect }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter((c) => c.name.toLowerCase().includes(q));
  }, [contacts, query]);

  return (
    <aside className="flex h-full w-full flex-col bg-panel md:w-[340px] md:shrink-0 md:border-r md:border-line">
      <SidebarHeader query={query} onQueryChange={setQuery} />
      <div className="thin-scroll flex-1 overflow-y-auto">
        <ContactList contacts={filtered} activeId={activeId} onSelect={onSelect} />
      </div>
      <SidebarProfile />
    </aside>
  );
}
