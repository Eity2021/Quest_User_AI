interface PriceSummaryProps {
  sessionType: "online" | "in-person"
  duration: string
  sessionPrice: number
  platformFee: number
  total: number
}

export default function PriceSummary({ sessionType, duration, sessionPrice, platformFee, total }: PriceSummaryProps) {
  return (
    <div className=" border border-border rounded-lg p-6 sticky top-8">
      <h2 className="text-lg font-semibold mb-6 text-white">Price Summary</h2>

      <div className="space-y-4 mb-6 pb-6 border-b border-border">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Session</p>
          <p className="font-medium text-green-400">{sessionType === "online" ? "Online" : "In Person"}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-1">Duration</p>
          <p className="font-medium text-white">{duration}</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Session</span>
          <span className="font-medium">${sessionPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Platform Fee</span>
          <span className="font-medium">${platformFee.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between text-lg font-semibold pt-4 border-t border-border">
        <span className="text-white">Total</span>
        <span className="text-white">${total.toFixed(2)}</span>
      </div>
    </div>
  )
}
