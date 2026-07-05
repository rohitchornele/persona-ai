"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./constant.js"
import NavLinks from "./navigation/NavLinks.jsx"
import NavLogo from "./navigation/NavLogo.jsx"
import NavbarActions from "./navigation/NavbarActions.jsx"


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-panel/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <NavLogo />

        <NavLinks
          links={NAV_LINKS}
          className="hidden md:flex md:items-center"
        />

        <NavbarActions />

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <MobileMenu
          links={NAV_LINKS}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}