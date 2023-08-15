import { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
    const [size, setSize] = useState({
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
    });
    useLayoutEffect(() => {
        const updateSize = () => {
            setSize(() => {
                return {
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight,
                    outerWidth: window.outerWidth,
                    outerHeight: window.outerHeight,
                }
            });
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}