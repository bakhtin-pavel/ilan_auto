import { React } from 'react';
import styles from './SlideNextButton.module.scss';

import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <>
            <button
                className={styles.button}
                onClick={() => swiper.slideNext()}
            >
                <div className={styles.buttonSkew}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="28" viewBox="0 0 15 28" fill="none">
                        <path d="M8 28H0L7 14L0 0H8L15 14L8 28Z" fill="#A3A3A3" />
                    </svg>
                </div>
            </button>
        </>
    );
}