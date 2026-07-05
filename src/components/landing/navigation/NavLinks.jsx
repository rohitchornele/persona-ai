export default function NavLinks({
  links,
  className = "",
}) {
  return (
    <ul className={`gap-8 ${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}