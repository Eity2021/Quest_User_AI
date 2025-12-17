"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";

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
} from "lucide-react";




export default function QuickLinks() {
  return (
    <div className="lg:col-span-1 ">
              <div className="rounded-xl bg-linear-to-r from-[#F65C5E] to-[#00A699] p-0.5 ">
                <Card className="p-6 bg-[#0D0D0D] border-none ">
                  <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
                  <div className="space-y-3 flex flex-col">
                    <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-[#F6F4F21A]  text-white">
                      <Bookmark className="h-5 w-5" />
                      <span>My Bookings</span>
                    </Button>

                    <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-[#F6F4F21A]  text-white">
                      <CreditCard className="h-5 w-5" />
                      <span>Payment History</span>
                    </Button>

                    <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-[#F6F4F21A]  text-white">
                      <BookOpen className="h-5 w-5" />
                      <span>Study History</span>
                    </Button>

                    <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-[#F6F4F21A]  text-white">
                      <Trophy className="h-5 w-5" />
                      <span>Achievements</span>
                    </Button>

                    <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-[#F6F4F21A]  text-white">
                      <Settings className="h-5 w-5" />
                      <span>Settings</span>
                    </Button>

                    <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-[#F6F4F21A]  text-white">
                      <HelpCircle className="h-5 w-5" />
                      <span>Help & Support</span>
                    </Button>

                    <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-[#F6F4F21A]  text-white">
                      <Users className="h-5 w-5" />
                      <span>Invite Friends</span>
                    </Button>

                    <Button variant="outline" className="justify-start gap-3 h-auto py-3 px-4 bg-[#F6F4F21A]  text-white">
                      <Star className="h-5 w-5" />
                      <span>Rate Our App</span>
                    </Button>

                    <Button
                      variant="outline"
                      className="justify-start gap-3 h-auto py-3 px-4 text-destructive bg-[#F6F4F21A] "
                    >
                      <LogOut className="h-5 w-5" />
                      <span>Log Out</span>
                    </Button>
                  </div>
                </Card>
              </div>

            </div>
  )
}
