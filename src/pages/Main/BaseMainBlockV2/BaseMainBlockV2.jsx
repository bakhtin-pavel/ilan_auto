import React from 'react';
import styles from './BaseMainBlockV2.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import mainTopImg from '../../../assets/img/main_top_img.png';
import redStipe from '../../../assets/img/test_red_strip.svg';
import mainCar from '../../../assets/img/main_car.png';

import auto1 from '../../../assets/img/test_slider_auto1.png';
import auto2 from '../../../assets/img/test_slider_auto2.png';
import auto3 from '../../../assets/img/test_slider_auto3.png';

const BaseMainBlockV2 = () => {

    const myArray = [auto1, auto2, auto3];

    return (
        <div className={styles.test}>
            <img src={redStipe} alt="" className={styles.redStripe} />
            <div className={styles.topBlock}>
                <img src={mainTopImg} alt="" className={styles.mainBackground} />
                <img src={mainCar} alt="" className={styles.mainCar} />
                <div className={styles.rightGradient}></div>
            </div>

            {/* <div className={styles.slider}>
                <div className={styles.sliderWrapper}>
                    <Swiper
                        slidesPerView={2}
                        loop={true}
                        className={styles.sliderTest}
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 55,
                                centeredSlides: true,
                            },
                        }}
                    >
                        {myArray.concat(myArray, myArray).map((element, index) =>
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <div className={isActive ? styles.slideActive : styles.slide}>
                                        <img src={element} alt="" />
                                    </div>
                                )}
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>
                <div className={styles.sideSlidePlatformLeft}></div>
                <div className={styles.sideSlidePlatformRight}></div>
            </div> */}
        </div>
    )
}

export default BaseMainBlockV2