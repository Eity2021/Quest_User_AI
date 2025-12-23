import { Clock } from "lucide-react"

interface SessionCardProps {
    id: number
    tutorName: string
    subject: string
    description: string
    avatar: string
    timeAgo: string
    isActive: boolean
}

export default function SessionCard({ tutorName, subject, description, avatar, timeAgo, isActive }: SessionCardProps) {
    return (
        <div className="bg-slate-700/40 border border-slate-600/50 rounded-lg p-4 hover:bg-slate-700/60 transition-all hover:border-slate-500 cursor-pointer group">
            <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-start gap-3 flex-1 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex-shrink-0 overflow-hidden">
                        <img src={avatar || "/placeholder.svg"} alt={tutorName} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-50 truncate">{tutorName}</h3>
                        <p className="text-sm text-slate-400 truncate">{subject}</p>
                    </div>
                </div>
                {isActive && <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />}
            </div>

            <p className="text-sm text-slate-300 mb-4 line-clamp-2">{description}</p>

            <div className="flex items-center justify-between pt-3 border-t border-slate-600/30">
                <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-4 h-4" />
                    {timeAgo}
                </div>
                <button className="px-3 py-1.5 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/30 transition-colors text-sm font-medium">
                    Book Now
                </button>
            </div>
        </div>
    )
}
