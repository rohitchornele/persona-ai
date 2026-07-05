import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import EmptyState from "./EmptyState";

export default function ChatWindow({
  contact,
  messages,
  isTyping,
  onSend,
  onBack,
}) {
  if (!contact) {
    return <EmptyState />;
  }

  return (
    <section className="flex h-full flex-1 flex-col bg-panelAlt/40">
      <ChatHeader
        contact={contact}
        isTyping={isTyping}
        onBack={onBack}
      />

      <MessageList
        messages={messages}
        isTyping={isTyping}
      />

      <MessageInput onSend={onSend} />
    </section>
  );
}