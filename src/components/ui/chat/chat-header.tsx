"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function ChatHeader() {
  const [language, setLanguage] = useState<"en" | "hi">("en");

  return (
    <header className="flex items-center justify-between px-4 py-4 border-b border-border bg-[#333]">
      <div className="flex items-center gap-3">
        <button className="text-foreground hover:opacity-80 transition-opacity">
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold">
            J
          </div>
          <div>
            <p className="font-semibold text-white">Joseph</p>
            <p className="text-xs text-[#008000]">Online</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === "en"
              ? "bg-accent text-accent-foreground"
              : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          En
        </button>
        <button
          onClick={() => setLanguage("hi")}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === "hi"
              ? "bg-accent text-accent-foreground"
              : "bg-muted text-muted-foreground hover:bg-border"
          }`}
        >
          Ban
        </button>
      </div>
    </header>
  );
}
