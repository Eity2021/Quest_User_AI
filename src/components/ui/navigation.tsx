"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center font-bold text-white">
                        TM
                    </div>
                    <span className="hidden sm:inline font-bold text-lg">TutorMatch</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-slate-300 hover:text-slate-50 transition-colors">
                        Explore
                    </a>
                    <a href="#" className="text-slate-300 hover:text-slate-50 transition-colors">
                        Become a Tutor
                    </a>
                    <a href="#" className="text-slate-300 hover:text-slate-50 transition-colors">
                        Pricing
                    </a>
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <button className="px-4 py-2 text-slate-300 hover:text-slate-50 transition-colors">Sign In</button>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-700 bg-slate-900/50 p-4 space-y-3">
                    <a href="#" className="block text-slate-300 hover:text-slate-50 py-2">
                        Explore
                    </a>
                    <a href="#" className="block text-slate-300 hover:text-slate-50 py-2">
                        Become a Tutor
                    </a>
                    <a href="#" className="block text-slate-300 hover:text-slate-50 py-2">
                        Pricing
                    </a>
                    <div className="flex gap-2 pt-3 border-t border-slate-700">
                        <button className="flex-1 px-4 py-2 text-slate-300 hover:text-slate-50 transition-colors">Sign In</button>
                        <button className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
