import React from 'react';
import Assist from '@/components/ui/assist/Assist';
import QuickActions from '@/components/ui/home/QuickActions';
import SscCourseCard from '@/components/ui/home/SscCourseCard';
import LessonProgress from '@/components/ui/home/LessonProgress';
import QuestAdvisorCard from '@/components/ui/home/QuestAdvisorCard';
import BecomeATutorCard from '@/components/ui/home/BecomeATutorCard';


const Dashboard: React.FC = () => {
    return (
        <section className='relative'>
               <div className="absolute -top-10 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-60 -z-10"></div>
      <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-40 -z-10"></div>
      <div className="absolute top-45 right-0 w-60 h-60 rounded-full bg-[#00A699] blur-[160px] opacity-60 -z-10 "></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#00A699] blur-[200px] opacity-60 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-60 -z-10"></div>
           <div className='container mx-auto'>
             <Assist></Assist>
            <QuestAdvisorCard></QuestAdvisorCard>
            <QuickActions></QuickActions>
            <SscCourseCard></SscCourseCard>
            <BecomeATutorCard></BecomeATutorCard>
            <LessonProgress></LessonProgress>
           </div>
        </section>
    );
};

export default Dashboard;