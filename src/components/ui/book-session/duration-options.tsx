"use client"

interface DurationOptionsProps {
  duration: string
  setDuration: (duration: string) => void
}

export default function DurationOptions({ duration, setDuration }: DurationOptionsProps) {
  const options = ["30 Min", "1 Hour", "1.5 Hour", "2 Hour"]

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-white">Duration</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => setDuration(option)}
            className={`p-3 rounded-lg border transition-colors text-sm font-medium ${
              duration === option
                ? "bg-[#FF5A5F] text-white "
                : "bg-[#222222] text-white"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
