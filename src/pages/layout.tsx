import "@/style/globals.css";
import "../style/globals.css";
import "@/style/base.css";
import "../style/base.css";
import { Metadata } from "next";
import { MainWindowCard } from "@/components/compound/MainWindowCard";
import { NavigationCard } from "@/components/compound/NavigationCard";
import { WindowPopUp } from "@/components/compound/WindowPopUp";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export const metadata: Metadata = {
  title: "Kinsley's Portfolio",
  description: "My internship portfolio about my experience"
};

const sectionIds = [
  'about me',
  'contact',
  'school artifacts',
  'internship',
  'first rotation',
  'second rotation',
  'third rotation'
];



export default function MyApp({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [popups, setPopups] = useState<{ [key: string]: boolean }>({});
  const router = useRouter();

  const togglePopup = (name: string) => {
    setPopups({
      ...popups,
      [name]: !popups[name],
    });
  };
  



  return (
        <>
          <NavigationCard togglePopupResume={() => togglePopup('resume')} />
          <WindowPopUp isOpen={popups['resume']} togglePopup={() => togglePopup('resume')} title="Resume">
            <object className="px-2" data="https://drive.google.com/file/d/1NIuchUPLTfy76YfNXG387MDS2m6p6pNU/preview?pli=1" width='500' height="600" />
          </WindowPopUp>
          <WindowPopUp isOpen={popups['first artifact']} togglePopup={() => togglePopup('first artifact')} title="Rotation 1 Artifact">
            <object className="px-2" data="https://drive.google.com/file/d/1FLrt7WGrXK4VMq-X2F9KDyDQompA1lWP/preview?pli=1" width='500' height="600" />
          </WindowPopUp>
          <WindowPopUp isOpen={popups['second artifact']} togglePopup={() => togglePopup('second artifact')} title="Rotation 2 Artifact">
            <object className="px-2" data="https://drive.google.com/file/d/1HVvMMK9in5IvNHh8A4yNyZZcHOjqmmEB/preview?pli=1" width='500' height="600" />
          </WindowPopUp>
          <WindowPopUp isOpen={popups['third artifact']} togglePopup={() => togglePopup('third artifact')} title="Rotation 3 Artifact">
            <object className="px-2" data="https://drive.google.com/file/d/12Gu7kTqIoBpIM6lGL9K9FQmkGDfNtj5V/preview?pli=1" width='500' height="600" />
          </WindowPopUp>

          <MainWindowCard scrollContainerRef={scrollContainerRef} classNames="my-2 mx-auto w-[75vw]" sectionIds={sectionIds}>
            {children}
          </MainWindowCard>
        </>
  );
}
