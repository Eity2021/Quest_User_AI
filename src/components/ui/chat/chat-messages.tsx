"use client";

import { useEffect, useRef } from "react";

interface Message {
  id: number;
  sender: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div className="flex gap-3 max-w-md">
            {message.sender === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-accent flex-shrink-0 flex items-center justify-center text-accent-foreground text-sm font-semibold">
                J
              </div>
            )}

            <div
              className={`px-4 py-3 rounded-xl ${
                message.sender === "user"
                  ? "bg-[#333] text-white"
                  : "bg-[#333] text-white"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}
