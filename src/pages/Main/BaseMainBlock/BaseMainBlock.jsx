import React from 'react';
import styles from './BaseMainBlock.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import mainTopImg from '../../../assets/img/main_top_img.png';
import mainCar from '../../../assets/img/main_car.png';

import auto1 from '../../../assets/img/test_slider_auto1.png';
import auto2 from '../../../assets/img/test_slider_auto2.png';
import auto3 from '../../../assets/img/test_slider_auto3.png';

import { SlideNextButton } from '../../../components';

const BaseMainBlock = () => {

    const myArray = [auto1, auto2, auto3];

    return (
        <div className={styles.container}>

            <div className={styles.topBlockContainer}>
                <img src={mainTopImg} alt="" className={styles.topBlockBackgroundImg} />
                <div className={styles.topBlock}>
                    <img src={mainCar} alt="" className={styles.topBlockCar} />
                    <div className={styles.rightGradient}></div>
                </div>
            </div>

            <div className={styles.headerContainer}>
                <div></div>
                <h2>Популярные автомобили</h2>
            </div>

            <div className={styles.slider}>
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
                                        <div className={styles.slideImg}>
                                            <img src={element} alt="" />
                                        </div>
                                        <p className={styles.slideName}>{`acura ${index}`}</p>
                                        <p className={styles.slidePrice}>от 2 890 000 ₽</p>
                                    </div>
                                )}
                            </SwiperSlide>
                        )}
                        <SlideNextButton />
                    </Swiper>
                </div>
                {/* <div className={styles.sideSlidePlatformLeft}></div>
                <div className={styles.sideSlidePlatformRight}></div> */}
            </div>
        </div>
    )
}

export default BaseMainBlock