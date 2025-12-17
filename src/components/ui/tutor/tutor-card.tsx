"use client"

import { ChevronRight, Star, Clock } from "lucide-react"
import { useState } from "react"

interface Tutor {
  id: number
  name: string
  subject: string
  experience: string
  available: string
  price: string
  rating: number
  image: string
}

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="bg-[#161616] border border-border rounded-xl p-5 hover:shadow-lg hover:border-accent transition-all duration-300 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        {/* Avatar and Info */}
        <div className="flex items-start gap-3 flex-1">
          <img
            src={tutor.image || "/placeholder.svg"}
            alt={tutor.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-accent shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white text-base truncate group-hover:text-accent transition-colors">
              {tutor.name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-1">{tutor.subject}</p>
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              <span className="text-xs font-medium text-white">{tutor.rating}</span>
            </div>
          </div>
        </div>

        {/* Price Badge */}
        <div className="bg-accent/10 text-accent px-3 py-1.5 rounded-lg shrink-0">
          <span className="font-bold text-sm">{tutor.price}</span>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2.5 mb-4 pb-4 border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-white">{tutor.experience}</span>
          <span>of Experience</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4 text-accent" />
          <span className="text-muted-foreground">{tutor.available}</span>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full bg-primary hover:bg-accent text-primary-foreground hover:text-accent-foreground py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
        <span>View Profile</span>
        <ChevronRight className={`w-4 h-4 transition-transform ${isHovered ? "translate-x-1" : ""}`} />
      </button>
    </div>
  )
}
