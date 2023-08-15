import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function useElementVisible(currentPath, idArray) {
    const { pathname } = useLocation();

    const [sectionVisible, setSectionVisible] = useState('');
    const timerRef = useRef();

    useEffect(() => {
        if (pathname !== currentPath) {
            setSectionVisible('');
            return
        }

        const handleScroll = () => {
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
                const sections = idArray;
                let allVisible = sections.length;

                sections.forEach((id) => {
                    const sectionElement = document.getElementById(id);
                    const { top, bottom } = sectionElement.getBoundingClientRect();
                    const isInView = top < (window.innerHeight * 0.8) && bottom > 100;

                    if (isInView && sectionVisible !== id) {
                        setSectionVisible(id);
                    }
                    if (!isInView) {
                        allVisible--
                    }
                })

                if (allVisible === 0) {
                    setSectionVisible('')
                }
            }, 100)
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    return sectionVisible;
}