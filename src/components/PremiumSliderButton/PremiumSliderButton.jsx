import React from 'react';
import styles from './PremiumSliderButton.module.scss';

import { useSwiper } from 'swiper/react';

const PremiumSliderButton = ({ isNext, position, isBeginning, isEnd }) => {

    const swiper = useSwiper();

    return (
        <>
            <button
                disabled={isNext ? isEnd : isBeginning}
                className={isNext ? [styles.buttonNext, position].join(' ') : [styles.buttonPrev, position].join(' ')}
                onClick={() => {
                    if (isNext) {
                        swiper.slideNext();
                    } else {
                        swiper.slidePrev();
                    }
                }}
            >
                {isNext
                    ? <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="20" viewBox="0 0 8 20" fill="none">
                            <path d="M2.90908 20H0L5.09089 10L0 0H2.90908L8 10L2.90908 20Z" fill="#A3A3A3" />
                        </svg>
                        <svg className={styles.hover} xmlns="http://www.w3.org/2000/svg" width="8" height="20" viewBox="0 0 8 20" fill="none">
                            <path d="M2.90908 20H0L5.09089 10L0 0H2.90908L8 10L2.90908 20Z" fill="#A3A3A3" />
                        </svg>
                    </>
                    : <>
                        <svg className={styles.hover} xmlns="http://www.w3.org/2000/svg" width="8" height="20" viewBox="0 0 8 20" fill="none">
                            <path d="M5.09092 20H8L2.90911 10L8 0H5.09092L4.76837e-07 10L5.09092 20Z" fill="#A3A3A3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="20" viewBox="0 0 8 20" fill="none">
                            <path d="M5.09092 20H8L2.90911 10L8 0H5.09092L4.76837e-07 10L5.09092 20Z" fill="#A3A3A3" />
                        </svg>
                    </>
                }
            </button>
        </>
    )
}

export default PremiumSliderButton;