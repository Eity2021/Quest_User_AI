"use client";

import { useState } from "react";
import ChatHeader from "./chat-header";
import ChatInput from "./chat-input";
import ChatMessages from "./chat-messages";

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      content:
        'How to rewrite this error message for a voice assistant? Original: "Error: Try again."',
      timestamp: new Date(Date.now() - 5 * 60000),
    },
    {
      id: 2,
      sender: "assistant",
      content: "Hmm... let me think this through.",
      timestamp: new Date(Date.now() - 2 * 60000),
    },
  ]);

  const handleSendMessage = async (content: string) => {
    const newMessage = {
      id: messages.length + 1,
      sender: "user" as const,
      content,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: content }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            sender: "assistant",
            content: data.answer,
            timestamp: new Date(),
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            sender: "assistant",
            content: "Sorry, I encountered an error. Please try again.",
            timestamp: new Date(),
          },
        ]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          sender: "assistant",
          content: "Sorry, I couldn't process your message. Please try again.",
          timestamp: new Date(),
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
