import { useEffect, useState, useRef, useCallback, RefObject, Fragment } from 'react';

interface TitleChangeLogicProps {
  sectionIds: string[];
  scrollContainerRef: RefObject<HTMLDivElement>;
}

export const TitleChangeLogic = ({ sectionIds, scrollContainerRef }: TitleChangeLogicProps) => {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let currentSection = '';
    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;  // Adjusted to account for full document scroll
        if (sectionTop <= window.scrollY + window.innerHeight / 2) {
          currentSection = id;
        } else {
          break;
        }
      }
    }

    setActiveSection(currentSection);
  }, [sectionIds, scrollContainerRef]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll(); // Trigger on mount to set initial state
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleScroll, scrollContainerRef]);

  useEffect(() => {
    const sections = activeSection.split('>');
    const pageTitle = sections.map(section => {
      switch (section.trim()) {
        case 'about me':
          return 'About Me';
        case 'contact':
          return 'Contact';
        case 'school artifacts':
          return 'School Artifacts';
        case 'internship':
          return 'Internship';
        case 'first rotation':
          return 'First Rotation';
        case 'second rotation':
          return 'Second Rotation';
        case 'third rotation':
          return 'Third Rotation';
        default:
          return 'Home';
      }
    }).join(' > ');
  }, [activeSection]);

  return (
    <>
      <div>
        {activeSection.split('>').map((section, index) => (
          <Fragment key={index}>
            {section.trim()}
            {index < activeSection.split('>').length - 1 && ' > '}
          </Fragment>
        ))}
      </div>
    </>
  );
};
