"use client"

import { CreditCard } from "lucide-react"

interface PaymentMethodProps {
  paymentMethod: "card" | "paypal"
  setPaymentMethod: (method: "card" | "paypal") => void
}

export default function PaymentMethod({ paymentMethod, setPaymentMethod }: PaymentMethodProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Payment Method</h2>
      <div className="space-y-3">
        <button
          onClick={() => setPaymentMethod("card")}
          className={`w-full p-4 rounded-lg border transition-colors text-left ${paymentMethod === "card" ? "bg-accent/10 border-accent text-white" : " border-border text-white"
            }`}
        >
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5" />
            <span className="font-medium">**** **** **** 4156</span>
          </div>
        </button>

        <button
          onClick={() => setPaymentMethod("paypal")}
          className={`w-full p-4 rounded-lg border transition-colors text-left ${paymentMethod === "paypal" ? "bg-accent/10 border-accent text-white" : "text-white border-border "
            }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              P
            </div>
            <span className="font-medium">PayPal</span>
          </div>
        </button>
      </div>
    </div>
  )
}
