// pages/internship.tsx
import { Internship, InternshipProps } from '@/components/compound/Internship';
import React from 'react';


const InternshipPage = ({togglePopup} : InternshipProps) => {
  
  return <Internship togglePopup={togglePopup} />;
};

export default InternshipPage;
