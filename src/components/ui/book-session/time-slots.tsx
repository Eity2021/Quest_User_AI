"use client"

interface TimeSlotsProps {
  selectedTime: string
  setSelectedTime: (time: string) => void
}

export default function TimeSlots({ selectedTime, setSelectedTime }: TimeSlotsProps) {
  const times = ["9:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"]

  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Available Time</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`p-3 rounded-lg border transition-colors text-sm font-medium ${
              selectedTime === time
                ? "bg-[#FF5A5F] text-white "
                : "bg-[#222222] text-white "
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  )
}
