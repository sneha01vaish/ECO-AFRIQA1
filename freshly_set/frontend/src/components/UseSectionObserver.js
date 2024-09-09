import { useContext, useEffect } from 'react';
import { ActiveSectionContext, useActiveSection } from './context/ActiveSectionContext';

const useSectionObserver = (sectionId, threshold = 0.5) => {
  const [activeSection, setActiveSection]  = useContext(ActiveSectionContext);

  useEffect(() => {
    const section = document.querySelector(sectionId);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(sectionId);
          console.log("Section In view is....", activeSection)

        }
      },
      { threshold }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);

      }
    };

  }, [sectionId, setActiveSection, threshold]);
};

export default useSectionObserver;
