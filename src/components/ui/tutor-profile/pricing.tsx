import React from 'react'

export default function Pricing() {
    
  const pricingTiers = [
    { name: "Hourly Rate", price: "$45/hr", description: "Pay as you go" },
    { name: "5-Session Package", price: "$249.99", description: "Save 10%" },
    { name: "10-Session Package", price: "$399.99", description: "Save 15%" },
  ]

  return (
   <section className=" border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4">Pricing</h2>
              <div className="space-y-3">
                {pricingTiers.map((tier, idx) => (
                  <div key={idx} className="pb-3 border-b border-border last:border-b-0">
                    <p className="text-sm font-semibold text-white">{tier.name}</p>
                    <p className="text-2xl font-bold text-muted-foreground mt-1">{tier.price}</p>
                    <p className="text-xs text-muted-foreground mt-1">{tier.description}</p>
                  </div>
                ))}
              </div>
            </section>
  )
}
