"use client";

export default function Avatar({
  name,
  image,
  accent = "jade",
  online = false,
}) {
  if (image) {
    return (
      <div className="relative shrink-0">
        <img
          src={image}
          alt={name}
          className="h-11 w-11 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />

        {online && (
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-panel bg-green-500" />
        )}
      </div>
    );
  }

  const initials = name
    ?.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="relative shrink-0">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-${accent} font-medium text-white`}
      >
        {initials}
      </div>

      {online && (
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-panel bg-green-500" />
      )}
    </div>
  );
}