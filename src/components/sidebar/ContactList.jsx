import ContactListItem from "./ContactListItem";

export default function ContactList({ contacts, activeId, onSelect }) {
  if (contacts.length === 0) {
    return (
      <p className="px-4 py-8 text-center text-sm text-muted">
        No conversations match your search.
      </p>
    );
  }

  return (
    <ul className="flex flex-col">
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          active={contact.id === activeId}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
