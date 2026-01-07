type MessageBubbleProps = {
  sender: "user" | "ai";
  text: string;
};

export function MessageBubble({ sender, text }: MessageBubbleProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-end gap-2 mb-5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <img
          src="/images/ai-avatar.jpg"
          alt="AI"
          className="w-8 h-8 rounded-full object-cover"
        />
      )}

      {/* Message Bubble */}
      <div
        className={`max-w-[70%] rounded-2xl p-3 text-lg capitalize font-baloo text-[#F3F3F4]
        ${
          isUser
            ? "bg-[#863C07] text-primary-foreground"
            : "bg-[#24242480]"
        }`}
      >
        {text}
      </div>

      {/* User Avatar */}
      {isUser && (
        <img
          src="/images/user-avatar.jpg"
          alt="User"
          className="w-8 h-8 rounded-full object-cover"
        />
      )}
    </div>
  );
}

