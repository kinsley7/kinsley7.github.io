// pages/about-me.tsx
import { AboutMe, AboutMeProps } from '@/components/compound/AboutMe';
import React from 'react';



const AboutMePage = ({togglePopup} : AboutMeProps) => {
  return <AboutMe classNames="justify-center" togglePopup={togglePopup} />;
};

export default AboutMePage;
