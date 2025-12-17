"use client"

import ProfileDropdown from "@/components/ui/profile/profile-dropdown";
import ProfileInfo from "@/components/ui/profile/profile-info";
import QuickLinks from "@/components/ui/profile/quick-links";




export default function page() {
  return (
    <div className="relative">
      <div className="absolute -top-10 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-60 -z-10"></div>
      <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-40 -z-10"></div>
      <div className="absolute top-45 right-0 w-60 h-60 rounded-full bg-[#00A699] blur-[160px] opacity-60 -z-10 "></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#00A699] blur-[200px] opacity-60 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-60 -z-10"></div>
      <div className="min-h-screen mx-auto container ">
        {/* ProfileDropdown */}
         <ProfileDropdown></ProfileDropdown>
        {/* Main Content */}
        <main className=" px-6 py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <ProfileInfo></ProfileInfo>
            <QuickLinks></QuickLinks>
          </div>
        </main>
      </div>
    </div>
  )
}
