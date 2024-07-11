import { useEffect, useState, useRef, useCallback, RefObject, Fragment } from 'react';
import { Link, Events, scrollSpy } from 'react-scroll';

interface TitleChangeLogicProps {
  sectionIds: string[];
  scrollContainerRef: RefObject<HTMLDivElement>;
}

export const TitleChangeLogic =  ({ sectionIds, scrollContainerRef } : TitleChangeLogicProps) => {
 
  const [activeSection, setActiveSection] = useState<string>('');
  
  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let currentSection = '';
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= container.scrollTop) {       
        let breadcrumb = id;
        let parent = section.parentElement;
        
        // Traverse up the DOM tree to build the breadcrumb
        while (parent && parent.id) {
          // Check if the parent is a section
          if (parent.tagName.toLowerCase() === 'section') {
            breadcrumb = `${parent.id} > ${breadcrumb}`;
          }
          parent = parent.parentElement;
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

  const sections = activeSection.split('>');
  return (
    <>
      {sections.map((section, index) => (
        <Fragment key={index}> 
          <a href={`#${section.trim()}`}>
            {section.trim()}
          </a>
          {index < sections.length - 1 && ' > '}
          </Fragment>
      ))}
    </>
  )
};