"use client"
import { useState } from "react";
import { Button } from "../button";
import { Card } from "@/components/ui/card"
import { BookOpen, BarChart3, Clock, Settings2 } from "lucide-react";

const categories = [
    {
        id: 1,
        title: "Chapter Wise",
        subtitle: "Tests",
        icon: BookOpen,
        color: "from-orange-500 to-orange-600",
        textColor: "text-orange-400",
    },
    {
        id: 2,
        title: "Full Syllabus",
        subtitle: "Tests",
        icon: BarChart3,
        color: "from-blue-500 to-blue-600",
        textColor: "text-blue-400",
    },
    {
        id: 3,
        title: "Previous Year",
        subtitle: "Test",
        icon: Clock,
        color: "from-red-500 to-red-600",
        textColor: "text-red-400",
    },
    {
        id: 4,
        title: "Custom",
        subtitle: "Tests",
        icon: Settings2,
        color: "from-green-500 to-green-600",
        textColor: "text-green-400",
    },
]

export default function TestCategories() {

    return (
        <section className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map((category) => {
                    const Icon = category.icon
                    return (
                        <Card
                            key={category.id}
                            className="group cursor-pointer border  border-[#F6F4F20D] bg-transparent p-4 transition-all  w-full"
                            style={{ boxShadow: "inset 0 2px 8px rgba(246, 244, 242, 0.45)" }} >
                       
                            <div className="mb-4 flex items-start justify-between">
                                <div className={`rounded-lg bg-linear-to-br ${category.color} p-3`}>
                                    <Icon className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            <h3 className={`text-lg font-semibold ${category.textColor}`}>
                                {category.title}
                            </h3>
                            <p className="text-sm text-white">
                                {category.subtitle}
                            </p>
                        </Card>
                    )
                })}
            </div>
        </section>

    )
}
