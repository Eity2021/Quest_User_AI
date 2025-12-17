"use client"

export default function FilterPanel() {
  return (
    <div className="mt-4 pt-4 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Subject</label>
        <select className="w-full px-3 py-2 bg-background text-foreground rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent">
          <option>All Subjects</option>
          <option>Mathematics</option>
          <option>Physics</option>
          <option>Chemistry</option>
          <option>English</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Price Range</label>
        <select className="w-full px-3 py-2 bg-background text-foreground rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent">
          <option>All Prices</option>
          <option>Under $20/hr</option>
          <option>$20 - $30/hr</option>
          <option>$30 - $50/hr</option>
          <option>Over $50/hr</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-foreground block mb-2">Rating</label>
        <select className="w-full px-3 py-2 bg-background text-foreground rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent">
          <option>All Ratings</option>
          <option>4.8+ Stars</option>
          <option>4.5+ Stars</option>
          <option>4.0+ Stars</option>
        </select>
      </div>
    </div>
  )
}
