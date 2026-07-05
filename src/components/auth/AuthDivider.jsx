export default function AuthDivider({
  text = "or",
}) {
  return (
    <div className="my-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-line" />

      <span className="text-xs uppercase tracking-wider text-muted">
        {text}
      </span>

      <div className="h-px flex-1 bg-line" />
    </div>
  );
}