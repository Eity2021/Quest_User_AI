"use client"
import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "../button"
export default function ModalContent() {
    const [progress, setProgress] = useState(13)
    useEffect(() => {
        const timer = setTimeout(() => setProgress(66), 500)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div>
            <p className="text-sm text-white mb-4">
                Choose Education Level
            </p>
            <div>
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">SSC</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">HSC</Label>
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">BSC</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">IELTS</Label>
                    </div>
                </div>

                <p className="text-white mt-4">see more</p>
            </div>

            <div>
                <p className="text-sm text-white mb-4">
                    Subject
                </p>

                <div className="flex justify-between mt-4">
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">Math</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">Math</Label>
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">Physics</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">Physics</Label>
                    </div>
                </div>

                <div className="flex justify-between mt-4">
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">Chemistry</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-white">Chemistry</Label>
                    </div>
                </div>
                <p className="text-white mt-4">see more</p>
            </div>

            <div>
                <p className="text-white mt-4 mb-2">Duration</p>

                <div>
                    <Progress value={progress} className="w-full mb-3" />
                    <div className="flex justify-between">
                        <Button>30 min</Button>
                        <Button>3h</Button>
                    </div>
                </div>
            </div>

            <div>
                <p className="text-sm text-white mb-4">
                    Difficulty
                </p>

                <div>
                    <div className=" mt-4">
                        <div className="flex items-center gap-3 mt-3">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms" className="text-white">Easy</Label>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms" className="text-white">Medium</Label>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms" className="text-white">Hard</Label>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
