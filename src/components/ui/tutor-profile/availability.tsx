import React from 'react'

export default function Availability() {
      const availabilitySlots = [
    { day: "MON", date: "16", available: true, times: ["9:00 AM", "2:00 PM"] },
    { day: "TUE", date: "17", available: true, times: ["10:00 AM", "3:00 PM"] },
    { day: "WED", date: "18", available: false, times: [] },
    { day: "THU", date: "19", available: true, times: ["9:00 AM", "4:00 PM"] },
    { day: "FRI", date: "20", available: true, times: ["11:00 AM", "5:00 PM"] },
    { day: "SAT", date: "21", available: true, times: ["10:00 AM", "2:00 PM"] },
    { day: "SUN", date: "22", available: false, times: [] },
  ]

  return (
    <section>
              <h2 className="text-2xl font-bold text-white mb-4">Availability</h2>
              <div className="grid grid-cols-7 gap-2">
                {availabilitySlots.map((slot, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg p-3 text-center transition-colors ${
                      slot.available
                        ? "bg-primary/20 border border-primary/50 hover:bg-primary/30 cursor-pointer"
                        : "bg-muted/30 border border-muted/30 opacity-50"
                    }`}
                  >
                    <p className="text-xs font-bold uppercase text-muted-foreground mb-1">{slot.day}</p>
                    <p className="text-base font-semibold text-white">{slot.date}</p>
                    {slot.available && <p className="text-xs text-muted-foreground mt-2">Available</p>}
                  </div>
                ))}
              </div>
            </section>
  )
}
