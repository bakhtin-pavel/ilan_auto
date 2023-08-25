import React from 'react';
import styles from './BaseMainBlock.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import mainTopImg from '../../../assets/img/main_top_img.png';
import mainTopImgTablet from '../../../assets/img/main_top_img_tablet.png';
import mainTopImgMobile from '../../../assets/img/main_top_img_mobile.png';
import mainCar from '../../../assets/img/main_car.png';

import auto1 from '../../../assets/img/test_slider_auto1.png';
import auto2 from '../../../assets/img/test_slider_auto2.png';
import auto3 from '../../../assets/img/test_slider_auto3.png';

import { useWindowSize } from '../../../hooks/useWindowSize';

import { SlideChangeButton } from '../../../components';

const BaseMainBlock = () => {

    const myArray = [
        { img: auto1, name: 'acura', },
        { img: auto2, name: 'isuzu', },
        { img: auto3, name: 'acura x-trail', },
        { img: auto3, name: 'acura 365', },
    ];

    const size = useWindowSize();

    return (
        <div className={styles.container}>

            <div className={styles.topBlockContainer}>
                <img
                    src={size.innerWidth > 1024 ? mainTopImg : size.innerWidth > 767 ? mainTopImgTablet : mainTopImgMobile}
                    alt="" className={styles.topBlockBackgroundImg}
                />
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
                        spaceBetween={0}
                        slidesOffsetBefore={20}
                        centeredSlides={false}
                        loop={true}
                        className={styles.sliderTest}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                                slidesOffsetBefore: 40,
                                centeredSlides: false,
                            },
                            1025: {
                                slidesPerView: 3,
                                spaceBetween: 55,
                                slidesOffsetBefore: 0,
                                centeredSlides: true,
                            },
                        }}
                    >
                        {myArray.concat(myArray, myArray).map((element, index) =>
                            <SwiperSlide key={index}>
                                {({ isActive }) => (
                                    <div className={isActive ? styles.slideActive : styles.slide}>
                                        <div className={styles.slideImg}>
                                            <img src={element.img} alt="" />
                                        </div>
                                        <p className={styles.slideName}>{element.name}</p>
                                        <p className={styles.slidePrice}>от 2 890 000 ₽</p>
                                    </div>
                                )}
                            </SwiperSlide>
                        )}
                        <div className={styles.buttonContainer}>
                            <SlideChangeButton isNext={false} />
                            <SlideChangeButton isNext={true} />
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default BaseMainBlock