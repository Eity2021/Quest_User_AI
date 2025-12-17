import RecommendedTests from '@/components/ui/tests/RecommendedTests'
import TestCategories from '@/components/ui/tests/TestCategories'
import React from 'react'

export default function page() {
  return (
    <div className='container mx-auto'>
      <div className=" px-4 py-8 sm:px-6 lg:px-8">
        <TestCategories />
        <RecommendedTests />
      </div>

    </div>
  )
}
