"use client"

import { useState } from "react"

import TutorCard from "@/components/ui/tutor/tutor-card"
import SearchingBar from "@/components/ui/tutor/searching-bar"

 const tutors = [
        {
            id: 1,
            name: "Sarah Johnson",
            subject: "M.Ed Mathematics",
            experience: "9 Years",
            available: "Available Today",
            price: "$24/Hr",
            rating: 4.8,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        },
        {
            id: 2,
            name: "Michael Chen",
            subject: "B.S. Physics",
            experience: "7 Years",
            available: "Available Today",
            price: "$28/Hr",
            rating: 4.9,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
        },
        {
            id: 3,
            name: "Emma Wilson",
            subject: "M.A. English Literature",
            experience: "12 Years",
            available: "Available in 2 hours",
            price: "$26/Hr",
            rating: 4.7,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
        },
        {
            id: 4,
            name: "David Kumar",
            subject: "B.Tech Computer Science",
            experience: "6 Years",
            available: "Available Today",
            price: "$25/Hr",
            rating: 4.6,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
        },
        {
            id: 5,
            name: "Lisa Rodriguez",
            subject: "M.Ed Chemistry",
            experience: "10 Years",
            available: "Available Tomorrow",
            price: "$27/Hr",
            rating: 4.9,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
        },
        {
            id: 6,
            name: "James Thompson",
            subject: "B.A. History",
            experience: "8 Years",
            available: "Available Today",
            price: "$23/Hr",
            rating: 4.5,
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
        },
    ]


export default function page() {
        const [searchQuery, setSearchQuery] = useState("")

    const filteredTutors = tutors.filter((tutor) => {
        const matchesSearch =
            tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            tutor.subject.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesSearch
    })


    return (
        <div className="min-h-screen ">
            {/* Search and Filter Bar */}
            <div className="bg-transparent border-b border-border ">
                <SearchingBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}></SearchingBar>
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 md:px-8 py-8">
                {/* Results Header */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold text-white mb-1">{filteredTutors.length} Tutors Found</h2>
                    <p className="text-muted-foreground text-sm">Browse our curated list of experienced tutors</p>
                </div>

                {/* Tutors Grid */}
                {filteredTutors.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTutors.map((tutor) => (
                            <TutorCard key={tutor.id} tutor={tutor} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">No tutors found matching your search.</p>
                    </div>
                )}
            </main>
        </div>
    )
}
