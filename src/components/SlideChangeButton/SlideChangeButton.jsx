import React from 'react';
import styles from './SlideChangeButton.module.scss';

import { useSwiper } from 'swiper/react';

export default function SlideChangeButton({ isNext, position, pause }) {
    const swiper = useSwiper();

    return (
        <>
            <button
                className={isNext ? [styles.buttonNext, position].join(' ') : [styles.buttonPrev, position].join(' ')}
                onClick={() => {
                    isNext ? swiper.slideNext() : swiper.slidePrev();
                    if (pause) pause();
                }}
            >
                <div className={styles.buttonSkew}>
                    {isNext
                        ? <svg xmlns="http://www.w3.org/2000/svg" width="15" height="28" viewBox="0 0 15 28" fill="none">
                            <path d="M8 28H0L7 14L0 0H8L15 14L8 28Z" fill="#A3A3A3" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="28" viewBox="0 0 15 28" fill="none">
                            <path d="M7 28H15L8 14L15 0H7L0 14L7 28Z" fill="#A3A3A3" />
                        </svg>
                    }
                </div>
            </button>
        </>
    );
}