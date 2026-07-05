export default function AuthHeader({
  title,
  subtitle,
  icon = "💬",
}) {
  return (
    <div className="mb-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-jade/10">
        <span className="text-2xl">{icon}</span>
      </div>

      <h1 className="font-display text-3xl font-semibold text-ink">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
}