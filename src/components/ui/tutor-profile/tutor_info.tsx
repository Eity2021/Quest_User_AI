import React from 'react'
import teacher from "@/assets/images/teacher.jpg";
import Image from "next/image";
import { Star } from "lucide-react"
import SubjectExpertise from './subject_expertise';
import { Button } from '../button';
export default function TutorInfo() {
  return (
     <div className="bg-[#060606] rounded-lg p-6 sm:p-8 border-2 border-[#1D1D1D] mb-8">
           <div className="flex flex-col sm:flex-row gap-6 mb-6">
             {/* Profile Image */}
             <div className="shrink-0">
               <Image
                 src={teacher}
                 alt="Sarah Johnson"
                 className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-primary"
               />
             </div>
 
             {/* Profile Info */}
             <div className="flex-1">
               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                 <div>
                   <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">Sarah Johnson</h1>
                   <p className="text-lg text-muted-foreground mb-3">Mathematics & Physics Specialist</p>
                   <div className="flex items-center gap-4 mb-4">
                     <div className="flex items-center gap-1">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} className="w-4 h-4 fill-[#ff6b6b] text-[#ff6b6b]" />
                       ))}
                     </div>
                     <span className="text-sm text-muted-foreground">4.9 (127 reviews)</span>
                   </div>
                 </div>
                 <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Video Resume</Button>
               </div>
 
               <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mb-4">
                 <p className="text-sm text-white">
                   Lorem ipsum dolor sit amet consectetur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                   accusantium doloremque laudantium.
                 </p>
               </div>
 
               {/* Experience & Languages */}
             <SubjectExpertise></SubjectExpertise>
             </div>
           </div>
         </div>
 
  )
}
