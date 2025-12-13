import React from 'react';
import QuestAdvisorCard from './QuestAdvisorCard';
import QuickActions from './QuickActions';
import SscCourseCard from './SscCourseCard';
import LessonProgress from './LessonProgress';
import BecomeATutorCard from './BecomeATutorCard';
import Assist from '@/components/ui/assist/Assist';


const Dashboard: React.FC = () => {

    return (

        <section className='container mx-auto'>
            <Assist></Assist>
            <QuestAdvisorCard></QuestAdvisorCard>
            <QuickActions></QuickActions>
            <SscCourseCard></SscCourseCard>
            <BecomeATutorCard></BecomeATutorCard>
            <LessonProgress></LessonProgress>
        </section>
    );
};

export default Dashboard;