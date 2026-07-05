import Avatar from "./Avatar";

export default function ContactListItem({
  contact,
  active,
  onSelect,
}) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(contact.id)}
        aria-current={active}
        className={`flex w-full items-center gap-3 border-l-2 px-4 py-3 text-left transition-colors focus:outline-none ${
          active
            ? "border-jade bg-jade/10"
            : "border-transparent hover:bg-panelAlt"
        }`}
      >
        <Avatar
          name={contact.name}
          accent={contact.accent}
          online={contact.online}
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="truncate font-medium text-ink">
              {contact.name}
            </span>

            {contact.online && (
              <span className="text-[11px] font-medium text-jade">
                Online
              </span>
            )}
          </div>

          <p className="truncate text-sm text-muted">
            {contact.title}
          </p>
        </div>
      </button>
    </li>
  );
}