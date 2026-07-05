# Chatter — Desktop Chat UI

A functional, interactive desktop-messenger-style chat interface built with **Next.js (App Router)**, **plain JS/JSX** (no TypeScript), and **Tailwind CSS v4**. Inspired by desktop chat apps like WhatsApp, but with its own visual identity — not a clone.

No real backend: data is local dummy data (`data/contacts.js`), and "auth" is a mock cookie-based flow (`lib/auth.js`) — both are clearly marked swap-points for the real thing.

## Features

- **Landing page** (`/`) with a sticky responsive Navbar, hero, features, and FAQ
- **Protected chat app** (`/chat`) — guarded by Next.js middleware, not just a client-side check
- 4 dummy contacts with seeded conversations; click to switch, sends auto-scroll
- Type and send messages (Enter to send, Shift+Enter for a new line); sent messages append instantly, with a simulated "typing…" indicator + auto-reply a moment later (client-side `setTimeout`, no backend)
- Search/filter contacts by name
- Light/dark theme toggle, persisted to `localStorage`, respects system preference on first load, shared across both routes
- Responsive: mobile nav menu on the landing page; single-pane with back-button navigation in the chat app
- Custom design system: jade/coral/amber/indigo accent palette, Sora (display) + Inter (body) + JetBrains Mono (timestamps) fonts, asymmetric "folded corner" message bubbles, initials-based avatars (no external image dependencies)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll land on the marketing page. Click **"Get Started"** in the navbar (this sets a mock session cookie) to enter `/chat`. Visiting `/chat` directly without that cookie redirects you back here.

## Styling — Tailwind v4

This project uses **Tailwind CSS v4**, which is CSS-first: there's no `tailwind.config.js`. All design tokens (colors, fonts, radii, animations) live directly in `app/globals.css` inside an `@theme` block. Light/dark values are still runtime-swappable — each token points at a plain CSS custom property (e.g. `--color-jade: var(--jade)`), and `:root` / `.dark` set the actual hex values, same pattern as before, just expressed in CSS instead of a JS config object.

```
app/globals.css
  @import "tailwindcss";     Tailwind v4 entry point (replaces @tailwind directives)
  @theme { ... }              Design tokens -> generates utilities (bg-jade, font-display, etc.)
  @custom-variant dark(...)   Re-enables class-based dark mode (`.dark` on <html>)
  :root / .dark               Actual color values for each theme
```

If you add a new color or font, add it inside the `@theme` block in `globals.css` — no other config file to touch.

## Project structure

```
middleware.js            Protects /chat/* — redirects to "/" if no session cookie

app/
  layout.js               Root layout, fonts, ThemeProvider (shared by both routes)
  page.js                 Landing page: Navbar + Hero + Features + Faq + Footer
  globals.css              Tailwind + CSS custom properties for both themes
  chat/
    page.js                The chat app itself (protected by middleware.js)

components/
  landing/
    Navbar.jsx              Sticky nav: logo, links, theme toggle, launch button, mobile menu
    NavLinks.jsx             Desktop nav links
    MobileMenu.jsx           Mobile dropdown panel (links + theme toggle + launch button)
    LaunchChatButton.jsx     Shared CTA: mock sign-in (if needed) + navigate to /chat
    Hero.jsx                 Landing hero section
    Features.jsx             3-up feature grid
    Faq.jsx                  FAQ accordion-style list
    Footer.jsx                Landing footer
  theme/
    ThemeProvider.jsx        Theme context (dark/light), persists to localStorage
    ThemeToggle.jsx           Sun/moon toggle button
  sidebar/
    Sidebar.jsx               Combines header + list, owns search state
    SidebarHeader.jsx         Search input + new-chat/theme/sign-out controls
    SignOutButton.jsx         Clears the mock session cookie, redirects to "/"
    ContactList.jsx           Renders filtered contacts
    ContactListItem.jsx       Single contact row (avatar, last message, time)
    Avatar.jsx                 Initials avatar with accent color + online dot
  chat/
    ChatWindow.jsx             Combines header + message list + input
    ChatHeader.jsx             Active contact info, call/menu icons, mobile back button
    MessageList.jsx            Scrollable message thread, auto-scrolls on new message
    MessageBubble.jsx          Single message bubble (sent/received styling)
    TypingIndicator.jsx        Animated "typing…" bubble
    MessageInput.jsx           Controlled input, Enter-to-send
    EmptyState.jsx              Shown when no conversation is selected

data/
  contacts.js               Dummy contacts, seeded messages, canned auto-replies

lib/
  auth.js                   Mock auth: signIn / signOut / isAuthenticated (cookie-based)
  utils.js                  getInitials, formatNow, pickRandom, accent-class map
```

## Wiring up real auth

Everything auth-related funnels through `lib/auth.js` and `middleware.js`:

1. Swap `signIn()` / `signOut()` in `lib/auth.js` for calls to your real auth provider (NextAuth, Clerk, Auth0, your own API) — set a real session cookie or token instead of the mock one.
2. Update the cookie/session check in `middleware.js` to validate that real session (verify a JWT, call your session store, etc.) instead of just checking for the cookie's presence.
3. `LaunchChatButton.jsx` and `SignOutButton.jsx` are the only components that call these functions — nothing else needs to change.

## Wiring up your own backend later

`app/chat/page.js` is the only place that "knows" the chat data is local. Swap `PERSONAS` for a fetch/query, and replace the `setTimeout` auto-reply block in `handleSend` with a real API call (e.g. POST message → receive response over REST/websocket, or stream tokens from an LLM) — every component below it just receives `contact` and `onSend` as props, so nothing else needs to change.

