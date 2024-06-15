import { useEffect, useState, useRef, useCallback, RefObject } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';

interface TitleChangeLogicProps {
  sectionIds: string[];
  scrollContainerRef: RefObject<HTMLDivElement>;
}

export const TitleChangeLogic =  ({ sectionIds, scrollContainerRef } : TitleChangeLogicProps) => {
 
  const [activeSection, setActiveSection] = useState<string>('home');
  
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    let currentSection = 'home';

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= container.scrollTop) {
        //currentSections.push(id); 
        //if section is nested inside another section push.id
        
        let breadcrumb = id;
        let parent = section.parentElement;
        
        // Traverse up the DOM tree to build the breadcrumb
        while (parent) {
          // Check if the parent is a section
          if (parent.id && parent.tagName.toLowerCase() === 'section') {
            console.log(id);
            breadcrumb = `${parent.id} > ${breadcrumb}`;
          }
          parent = section.parentElement;
        }
        currentSection = breadcrumb;
      }
        else {
          break;
        }
      }
      //console.log(currentSection);
      setActiveSection(currentSection);
  }, [sectionIds, scrollContainerRef]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll, scrollContainerRef]);

  
  return <>{activeSection}</>;
};