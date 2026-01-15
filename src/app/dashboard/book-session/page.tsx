"use client"

import { useState } from "react"
import SessionType from "@/components/ui/book-session/session-type";
 import Calendar from "@/components/ui/book-session/calendar";
import TimeSlots from "@/components/ui/book-session/time-slots";
import DurationOptions from "@/components/ui/book-session/duration-options";
import PriceSummary from "@/components/ui/book-session/price-summary";
import PaymentMethod from "@/components/ui/book-session/payment-method";

export default function page() {
  const [sessionType, setSessionType] = useState<"online" | "in-person">("online")
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("3:00 PM")
  const [duration, setDuration] = useState<string>("30 Min")
  const [topic, setTopic] = useState<string>("")
  const [requirements, setRequirements] = useState<string>("")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card")

  const sessionPrice = 45.0
  const platformFee = 2.0
  const total = sessionPrice + platformFee

  return (
    <div className="min-h-screen bg-background text-foreground  border-t">


      <main className="mx-auto container px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* Left Column - Booking Form */}
          <div className="md:col-span-2 space-y-8">
            <SessionType sessionType={sessionType} setSessionType={setSessionType} />

            <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

            <TimeSlots selectedTime={selectedTime} setSelectedTime={setSelectedTime} />

            <DurationOptions duration={duration} setDuration={setDuration} />

            <div>
              <h2 className="text-xl font-semibold mb-4 text-white">Subject/Topic</h2>
              <input
                type="text"
                placeholder="Add topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full  border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-white">Special Requirement</h2>
              <textarea
                placeholder="Lorem ipsum dolor sit amet consectetur. Cras adipiscing amet quis faucibus ac. Semper libero pellentesque proin fermentum lacinia proin lacinia ipsum."
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                rows={4}
                className="w-full  border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              />
            </div>

            <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
          </div>

          {/* Right Column - Price Summary */}
          <div>
            <PriceSummary
              sessionType={sessionType}
              duration={duration}
              sessionPrice={sessionPrice}
              platformFee={platformFee}
              total={total}
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center md:justify-end md:col-span-2">
          <button className="w-full md:max-w-sm bg-[#FF5A5F] text-white font-semibold py-3 rounded-lg transition-colors">
            Continue Booking - ${total.toFixed(2)}
          </button>
        </div>
      </main>
    </div>
  )
}
