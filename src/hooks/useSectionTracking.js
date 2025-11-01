import { useEffect, useRef } from 'react';
import { trackSectionView } from '../utils/analytics';

export const useSectionTracking = (sectionName) => {
  const sectionRef = useRef(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Rastreia quando a seção está 50% visível e ainda não foi rastreada
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !hasTracked.current) {
            trackSectionView(sectionName);
            hasTracked.current = true;
          }
        });
      },
      {
        threshold: 0.5, // Dispara quando 50% da seção está visível
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionName]);

  return sectionRef;
};
