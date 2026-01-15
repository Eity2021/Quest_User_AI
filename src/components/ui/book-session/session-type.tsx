"use client"

import { MapPin, Zap } from "lucide-react"

interface SessionTypeProps {
  sessionType: "online" | "in-person"
  setSessionType: (type: "online" | "in-person") => void
}

export default function SessionType({ sessionType, setSessionType }: SessionTypeProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-white">Session Type</h2>
      <div className="space-y-3">
        <button
          // onClick={() => setSessionType("online")}
          className={`w-full p-4 rounded-lg border transition-colors text-left ${
            sessionType === "online" ? "bg-accent/10 border-accent" : "bg-card border-border hover:bg-card/80"
          }`}
        >
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-accent" />
            <div>
              <h3 className="font-semibold text-white">Online</h3>
              <p className="text-sm text-muted-foreground">Meet Anywhere</p>
            </div>
          </div>
        </button>

        <button
          // onClick={() => setSessionType("in-person")}
          // className={`w-full p-4 rounded-lg border transition-colors text-left ${
          //   sessionType === "in-person" ? "bg-accent/10 border-accent" : "bg-card border-border hover:bg-card/80"
          // }`}
          className="w-full p-4 rounded-lg border transition-colors text-left  border-border"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <div>
              <h3 className="font-semibold text-white">In Person</h3>
              <p className="text-sm text-muted-foreground">Meet At Studio</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
