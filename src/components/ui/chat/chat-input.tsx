"use client";

import type React from "react";

import { useState } from "react";
import { Paperclip, Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="border-t border-border  px-4 py-4">
      <div className="flex gap-3 items-end">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type Here"
          rows={1}
          className="flex-1 bg-[#333] text-white placeholder-muted-foreground px-4 py-3 rounded-xl border border-border focus:border-accent outline-none resize-none text-sm"
        />

        <div className="flex gap-2">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
            <Paperclip size={20} />
          </button>

          <button className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground hover:text-foreground">
            <Mic size={20} />
          </button>

          <Button
            onClick={handleSend}
            disabled={!message.trim()}
            size="icon"
            className="bg-accent hover:bg-accent/90 text-accent-foreground disabled:opacity-50"
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
