import Link from "next/link";

export default function AuthFooter({
  text,
  linkText,
  href,
}) {
  return (
    <p className="mt-6 text-center text-sm text-muted">
      {text}{" "}
      <Link
        href={href}
        className="font-medium text-jade transition hover:text-jadeDeep"
      >
        {linkText}
      </Link>
    </p>
  );
}