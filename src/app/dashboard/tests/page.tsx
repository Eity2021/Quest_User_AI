import RecommendedTests from "@/components/ui/tests/recommended-tests";
import TestCategories from "@/components/ui/tests/test-categories";

export default function page() {
  return (
<div className="relative">
      <div className="absolute -top-10 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-60 -z-10"></div>
      <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-40 -z-10"></div>
      <div className="absolute top-45 right-0 w-60 h-60 rounded-full bg-[#00A699] blur-[160px] opacity-60 -z-10 "></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#00A699] blur-[200px] opacity-60 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-60 -z-10"></div>
      <div className='container mx-auto min-h-screen'>
      <div className="px-4 py-8 sm:px-6 lg:px-8">
        <TestCategories />
        <RecommendedTests />
      </div>
    </div>
  </div>
  )
}
