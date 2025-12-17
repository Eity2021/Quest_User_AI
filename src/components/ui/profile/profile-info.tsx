"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import hoursIcon from "@/assets/images/hoursIcon.png";
import notedIcon from "@/assets/images/notedIcon.png";
import accuracyIcon from "@/assets/images/accuracyIcon.png";
import subjectIcon from "@/assets/images/subjectIcon.png";
import {
  Edit2,
  TrendingUp,
} from "lucide-react";
import { Image } from "@unpic/react";



export default function ProfileInfo() {
  return (
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
                    <Button variant="outline" size="sm" className="gap-2 bg-white">
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

                    <div className=" bg-[#2A1E2366] rounded-[12px] py-8" style={{
                      boxShadow: "inset 0 2px 8px rgba(246, 92, 94, 0.45)"
                    }}>
                      <div className="flex justify-between items-center h-full px-6">

                        <div>
                          <h1 className="text-3xl font-bold text-white">127</h1>
                          <p className="text-sm text-muted-foreground mt-1">Study Hours</p>
                        </div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 mb-3">
                          <Image src={hoursIcon.src} alt="hoursIcon" layout="fixed"
                            width={30}
                            height={30}
                          />
                        </div>
                      </div>
                    </div>

                    <div className=" bg-[#0D0D0D]  rounded-[12px] py-8" style={{
                      boxShadow: "inset 0 2px 8px rgba(103, 116, 255, 0.45)"
                    }}>
                    

                       <div className="flex justify-between items-center h-full px-6">
                        <div>
                          <h1 className="text-3xl font-bold text-white">43</h1>
                          <p className="text-sm text-muted-foreground mt-1">Topics Completed</p>
                        </div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 mb-3">
                          <Image src={notedIcon.src} alt="notedIcon" layout="fixed"
                            width={30}
                            height={30}
                          />
                        </div>
                      </div>


                    </div>

                    <div className=" bg-[#0D0D0D]  rounded-[12px] py-8" style={{
                      boxShadow: "inset 0 2px 8px rgba(249, 166, 46, 0.45)"
                    }}>
                   
                  
                       <div className="flex justify-between items-center h-full px-6">
                        <div>
                          <h1 className="text-3xl font-bold text-white">85%</h1>
                          <p className="text-sm text-muted-foreground mt-1">Accuracy</p>
                        </div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 mb-3">
                          <Image src={accuracyIcon.src} alt="accuracyIcon" layout="fixed"
                            width={30}
                            height={30}
                          />
                        </div>
                      </div>


                    </div>

                    <div className="bg-[#0D0D0D]  rounded-[12px] py-8" style={{
                      boxShadow: "inset 0 2px 8px rgba(141, 249, 46, 0.45)"
                    }}>
 
                        <div className="flex justify-between items-center h-full px-6">
                        <div>
                          <h1 className="text-3xl font-bold text-white">23</h1>
                          <p className="text-sm text-muted-foreground mt-1">Subjects Studied</p>
                        </div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 mb-3">
                          <Image src={subjectIcon.src} alt="subjectIcon" layout="fixed"
                            width={30}
                            height={30}
                          />
                        </div>
                      </div>


                    </div>

                  </div>
                </div>
              </div>
            </div>

  )
}
