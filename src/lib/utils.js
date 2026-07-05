// Deterministic accent color per contact, and shared small helpers.

export const ACCENTS = {
  jade: {
    bg: "bg-jade",
    text: "text-jade",
    ring: "ring-jade",
    soft: "bg-jade/15",
  },
  coral: {
    bg: "bg-coral",
    text: "text-coral",
    ring: "ring-coral",
    soft: "bg-coral/15",
  },
  amber: {
    bg: "bg-amber",
    text: "text-amber",
    ring: "ring-amber",
    soft: "bg-amber/15",
  },
  indigo: {
    bg: "bg-indigo",
    text: "text-indigo",
    ring: "ring-indigo",
    soft: "bg-indigo/15",
  },
};

export function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export function formatNow() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
