"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface CalendarProps {
  selectedDate: Date | null
  setSelectedDate: (date: Date) => void
}

export default function Calendar({ selectedDate, setSelectedDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 2)) // March 2025

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Select Date</h2>
        <div className="flex items-center gap-2">
          <select className="text-white border border-border rounded px-5 py-1 text-sm">
            <option>2025</option>
          </select>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
              className="p-1 bg-card rounded"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium min-w-24 text-center text-white">{monthNames[currentMonth.getMonth()]}</span>
            <button
              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
              className="p-1 bg-card rounded"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className=" border border-border rounded-lg p-4">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => {
                if (day) {
                  setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))
                }
              }}
              className={`aspect-square rounded text-lg font-medium transition-colors ${
                day === null
                  ? "cursor-default"
                  : selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth.getMonth()
                    ? " bg-[#FF5A5F] text-white "
                    : " bg-[#222222]  text-white"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
