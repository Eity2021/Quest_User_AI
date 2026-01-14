import React from 'react'
import { Star } from "lucide-react"
export default function Review() {
      const reviews = [
    {
      name: "Alex Chen",
      rating: 5,
      text: "Sarah is an exceptional tutor! She explained complex concepts in a way I could understand. Her patience and expertise helped me improve my grades significantly.",
    },
    {
      name: "Alex Chen",
      rating: 4,
      text: "Great sessions and very flexible with scheduling. She really understands how different students learn and adapts her teaching style accordingly.",
    },
    {
      name: "Alex Chen",
      rating: 5,
      text: "Best tutor I've worked with. Sarah goes above and beyond to ensure student success. Highly recommend for math and physics!",
    },
  ]
  return (
  <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">Reviews (127)</h2>
                <button className="text-white hover:text-primary/80 text-sm font-medium">See all</button>
              </div>
              <div className="space-y-4">
                {reviews.map((review, idx) => (
                  <div key={idx} className=" border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="font-semibold text-white">{review.name}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-[#ff6b6b] text-[#ff6b6b]" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </section>
  )
}
