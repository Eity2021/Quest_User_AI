"use client"
import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "../button"
export default function ModalContentChat() {
    const [progress, setProgress] = useState(13)
    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div>
            <p className="text-sm text-white mb-4">
                User Type
            </p>
            <div>
                <div className="">
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">Student</Label>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">Tutor</Label>
                    </div>
                </div>
            </div>
        </div>
    )
}
