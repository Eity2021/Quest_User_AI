
"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import FilterPanel from "@/components/ui/tutor/filter-panel";

interface SearchingBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}



export default function SearchingBar({ searchQuery, setSearchQuery }: SearchingBarProps) {

        const [sortBy, setSortBy] = useState("relevant")
    const [showFilters, setShowFilters] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState({
        subject: "all",
        priceRange: "all",
        rating: "all",
    })


  return (
  <div className="container mx-auto px-4 md:px-8 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        {/* Search Input */}
                        <div className="flex-1 relative w-full ">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search tutors or subjects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 text-foreground placeholder-muted-foreground rounded-lg border border-border focus:outline-none focus:ring-0 focus:ring-accent"
                            />
                        </div>

                        {/* Filter Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="flex items-center gap-2 px-4 py-2.5  text-white hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors border border-border"
                        >
                            <Filter className="w-4 h-4" />
                            <span>Filters</span>
                        </button>

                        {/* Sort Dropdown */}
                        <div className="w-full md:w-auto">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full px-4 py-2.5  text-white rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent"
                            >
                                <option value="relevant">Sort By: Relevant</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                                <option value="experience">Most Experienced</option>
                            </select>
                        </div>
                    </div>

                    {/* Filters Panel */}
                    {showFilters && <FilterPanel />}
                </div>
  )
}
