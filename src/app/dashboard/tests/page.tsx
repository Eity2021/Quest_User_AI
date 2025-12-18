"use client"

import CustomModal from "@/components/ui/custom-modal/custom-modal";
import Filter from "@/components/ui/tests/filter";
import ModalContent from "@/components/ui/tests/modal-content";
import RecommendedTests from "@/components/ui/tests/recommended-tests";
import TestCategories from "@/components/ui/tests/test-categories";
import { useState } from "react";

export default function page() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className="absolute -top-10 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-60 -z-10"></div>
      <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-40 -z-10"></div>
      <div className="absolute top-45 right-0 w-60 h-60 rounded-full bg-[#00A699] blur-[160px] opacity-60 -z-10 "></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#00A699] blur-[200px] opacity-60 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-60 -z-10"></div>
      <div className='container mx-auto min-h-screen'>
        <div className="px-4 py-8 sm:px-6 lg:px-8">
          <Filter setOpen={setOpen}></Filter>
          <TestCategories />
          <RecommendedTests />
        </div>

        <CustomModal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Filters"
        >
          <div>
            <ModalContent></ModalContent>
          </div>
        </CustomModal>
      </div>

    </div>
  )
}
