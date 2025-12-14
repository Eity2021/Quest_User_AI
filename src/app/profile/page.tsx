"use client"
import CustomDropdown from "@/components/CustomDropdown";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Bookmark,
  CreditCard,
  BookOpen,
  Trophy,
  Settings,
  HelpCircle,
  Users,
  Star,
  LogOut,
  Edit2,
  TrendingUp,
} from "lucide-react";


const options = [
  { label: "USD", value: "usd" },
  { label: "EUR", value: "eur" },
  { label: "TK", value: "tk" },
];

export default function page() {
  return (
    <div className="relative">
      <div className="absolute -top-10 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-60 -z-10"></div>
      <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-40 -z-10"></div>
      <div className="absolute top-45 right-0 w-60 h-60 rounded-full bg-[#00A699] blur-[160px] opacity-60 -z-10 "></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#00A699] blur-[200px] opacity-60 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-60 -z-10"></div>
      <div className="min-h-screen mx-auto container ">
        {/* Header */}
        <header className=" mx-6 ">
          <div className="mx-auto  px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-white">Profile</div>
            <div className="flex items-center gap-4">

              <CustomDropdown
                options={options}

                onChange={(value) => console.log(value)}
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className=" px-6 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left Column - Profile & Stats */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Card */}
          <div className="rounded-xl bg-linear-to-r from-[#F65C5E] to-[#00A699] p-0.5">
  <Card className="p-8 rounded-xl bg-[#0D0D0D]  border-0">
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-6">
        <div className="h-20 w-20 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-accent-foreground">
          SJ
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">Sarah Johnson</h1>
          <p className="text-muted-foreground mt-1">High School Senior</p>
        </div>
      </div>
      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
        <Edit2 className="h-4 w-4" />
        Edit
      </Button>
    </div>
  </Card>
</div>


              {/* XP & Rewards */}
                <div className="rounded-xl bg-linear-to-r from-[#F65C5E] to-[#00A699] p-0.5"> 
                      <Card className="p-8 bg-[#0D0D0D] border-none">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-white" />
                      XP & Rewards
                    </h2>
                    <span className="text-2xl font-bold text-accent">2450 XP</span>
                  </div>

                  {/* Level Progress */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Level 8</span>
                      <span className="text-muted-foreground">Level 9</span>
                    </div>
                    <div className="w-full bg-input rounded-full h-3 overflow-hidden">
                      <div className="bg-linear-to-r from-accent to-accent-foreground h-full w-2/3 rounded-full"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">360 XP to next level</p>
                  </div>
                </div>

                <Button className="w-full bg-[#FF5A5F] hover:bg-[#FF5A5F] text-white text-base py-8">
                  Redeem Rewards
                </Button>
              </Card>

                </div>
          
              {/* Learning Statistics */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Learning Statistics</h2>
                <div className="">
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                  <div className=" bg-[#2A1E2366]">
                  <div className="flex justify-between items-center h-full px-6">
                     
                   <div>
                     <h1 className="text-3xl font-bold text-white">127</h1>
                    <p className="text-sm text-muted-foreground mt-1">Study Hours</p>
                   </div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 mb-3">
                      <BookOpen className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  </div>

                  <div className="text-center bg-[#0D0D0D]">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20 mb-3">
                      <Trophy className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">43</div>
                    <p className="text-sm text-muted-foreground mt-1">Topics Completed</p>
                  </div>

                  <div className="text-center bg-[#0D0D0D]">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-500/20 mb-3">
                      <Star className="h-6 w-6 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">85%</div>
                    <p className="text-sm text-muted-foreground mt-1">Accuracy</p>
                  </div>

                  <div className="text-center bg-[#0D0D0D]">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/20 mb-3">
                      <TrendingUp className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="text-3xl font-bold text-foreground">23</div>
                    <p className="text-sm text-muted-foreground mt-1">Subjects Studied</p>
                  </div>
                </div>
               </div>
              </div>
            </div>

            {/* Right Column - Quick Links */}
            <div className="lg:col-span-1 ">
              <Card className="p-6 bg-[#424242] border-border h-full">
                <h2 className="text-lg font-bold text-foreground mb-4">Quick Links</h2>
                <div className="space-y-3 flex flex-col">
                  <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-transparent">
                    <Bookmark className="h-5 w-5" />
                    <span>My Bookings</span>
                  </Button>

                  <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-transparent">
                    <CreditCard className="h-5 w-5" />
                    <span>Payment History</span>
                  </Button>

                  <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-transparent">
                    <BookOpen className="h-5 w-5" />
                    <span>Study History</span>
                  </Button>

                  <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-transparent">
                    <Trophy className="h-5 w-5" />
                    <span>Achievements</span>
                  </Button>

                  <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-transparent">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Button>

                  <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-transparent">
                    <HelpCircle className="h-5 w-5" />
                    <span>Help & Support</span>
                  </Button>

                  <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-transparent">
                    <Users className="h-5 w-5" />
                    <span>Invite Friends</span>
                  </Button>

                  <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-transparent">
                    <Star className="h-5 w-5" />
                    <span>Rate Our App</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start gap-3 h-auto py-3 px-4 text-destructive hover:bg-destructive/10 bg-transparent"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Log Out</span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
