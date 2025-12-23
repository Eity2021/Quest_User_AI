"use client"

import { useState } from "react"
import { Search } from "lucide-react"
// import SessionCard from "@/components/session-card"
// import Navigation from "@/components/navigation"

import SessionCard from "@/components/ui/session-card"
import Navigation from "@/components/ui/navigation"
import { Button } from "@/components/ui/button"
import CustomModal from "@/components/ui/custom-modal/custom-modal"
import ModalContentChat from "@/components/ui/chat-box/modal-content-chat"

export default function page() {
    const [view, setView] = useState<"student" | "tutor">("student")
    const [searchQuery, setSearchQuery] = useState("")
    const [open, setOpen] = useState(false);
    const sessions = [
        {
            id: 1,
            tutorName: "Marsha Fisher",
            subject: "Mathematics",
            description: "Time for your daily math practice session!",
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Marsha`,
            timeAgo: "5 min ago",
            isActive: true,
        },
        {
            id: 2,
            tutorName: "Marsha Fisher",
            subject: "Physics",
            description: "Time for your daily physics practice session!",
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Marsha2`,
            timeAgo: "10 min ago",
            isActive: false,
        },
        {
            id: 3,
            tutorName: "Marsha Fisher",
            subject: "Chemistry",
            description: "Time for your daily chemistry practice session!",
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Marsha3`,
            timeAgo: "15 min ago",
            isActive: true,
        },
        {
            id: 4,
            tutorName: "Marsha Fisher",
            subject: "Biology",
            description: "Time for your daily biology practice session!",
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Marsha4`,
            timeAgo: "20 min ago",
            isActive: false,
        },
        {
            id: 5,
            tutorName: "Marsha Fisher",
            subject: "English",
            description: "Time for your daily english practice session!",
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=Marsha5`,
            timeAgo: "25 min ago",
            isActive: true,
        },
    ]

    const filteredSessions = sessions.filter(
        (session) =>
            session.tutorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            session.subject.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <section className="relative">
            <div className="absolute -top-10 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-70 -z-10"></div>
            <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-80 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-70 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-70 -z-10"></div>
            <main className="min-h-screen  text-slate-50 flex flex-col ">
                <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
                    <div className="container mx-auto">
                        {/* Header Section */}
                        <div className="mb-8">
                            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-balance">Find Your Perfect Tutor</h1>
                            <p className="text-slate-400 text-lg">Connect with expert tutors and accelerate your learning journey</p>
                        </div>

                        {/* Search Bar */}
                        <div className="grid grid-cols-7 gap-4">
                            <div className="col-span-6">
                                <div className="mb-8 ">
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="Search tutors, subjects..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button className='text-white bg-transparent border border-[#F6F4F20D] px-8  w-full' size="lg" onClick={() => setOpen(true)} style={{ boxShadow: "inset 0 1px 2px rgba(246, 244, 242, 0.45)" }}>Filter</Button>
                            </div>
                        </div>
                        {/* Tab Navigation */}
                        <div className="flex gap-2 mb-8 border-b border-slate-700">
                            <button
                                onClick={() => setView("student")}
                                className={`px-4 py-3 font-medium transition-all ${view === "student" ? "text-blue-400 border-b-2 border-blue-400" : "text-slate-400 hover:text-slate-200"
                                    }`}
                            >
                                Find Tutors
                            </button>
                            <button
                                onClick={() => setView("tutor")}
                                className={`px-4 py-3 font-medium transition-all ${view === "tutor" ? "text-blue-400 border-b-2 border-blue-400" : "text-slate-400 hover:text-slate-200"
                                    }`}
                            >
                                My Sessions
                            </button>
                        </div>

                        {/* Sessions Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredSessions.length > 0 ? (
                                filteredSessions.map((session) => <SessionCard key={session.id} {...session} />)
                            ) : (
                                <div className="col-span-full text-center py-12">
                                    <p className="text-slate-400 text-lg">No sessions found</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <CustomModal
                isOpen={open}
                onClose={() => setOpen(false)}
                title="Filters"
            >
                <div>
                    <ModalContentChat></ModalContentChat>
                </div>
            </CustomModal>
        </section>
    )
}
