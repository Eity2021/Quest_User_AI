import React from 'react'

export default function SubjectExpertise() {
  return (
    <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-2">
                    Years of Teaching Experience
                  </p>
                  <p className="text-lg font-semibold text-white">8+ Years</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold mb-2">Languages</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 text-white border border-secondary/30">
                      English (Native)
                    </span>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 text-white border border-secondary/30">
                      Spanish (Fluent)
                    </span>
                  </div>
                </div>
              </div>
  )
}
