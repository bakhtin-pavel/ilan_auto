import React, { useState } from 'react';

import styles from './Main.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, EffectCube, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-creative';

import mainTopImg from '../../assets/img/main_top_img.png';
import redStipe from '../../assets/img/test_red_strip.svg';
import mainCar from '../../assets/img/main_car.png';

import auto1 from '../../assets/img/test_slider_auto1.png';
import auto2 from '../../assets/img/test_slider_auto2.png';
import auto3 from '../../assets/img/test_slider_auto3.png';

const Main = () => {

    const myArray = [auto1, auto2, auto3];
    const autoArray = ['acura', 'isuzu', 'lamborgini'];

    const [nameSwiper, setNameSwiper] = useState(null);

    const nameSlideChange = (swiper) => {
        if (!nameSwiper) return
        if (swiper.swipeDirection === 'prev') {
            nameSwiper.slidePrev();
        } else {
            nameSwiper.slideNext();
        }
    }

    return (
        <>
            <div className={styles.mainBackgroundFon}>
                <div className={styles.test}>
                    <img src={redStipe} alt="" className={styles.redStripe} />
                    <div className={styles.topBlock}>
                        <img src={mainTopImg} alt="" className={styles.mainBackground} />
                        <img src={mainCar} alt="" className={styles.mainCar} />
                        <div className={styles.rightGradient}></div>
                    </div>

                    <div className={styles.slider}>
                        <div className={styles.sliderWrapper}>
                            <Swiper
                                slidesPerView={2}
                                loop={true}
                                onSlideChangeTransitionStart={(swiper) => nameSlideChange(swiper)}
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
                    </div>
                </div>
                <div className={styles.nameAutoSlderContainer}>
                    <div className={styles.nameAutoSlderWrapper}>
                        <Swiper
                            allowTouchMove={false}
                            loop={true}
                            onSwiper={setNameSwiper}
                            effect={'creative'}
                            creativeEffect={{
                                prev: {
                                    shadow: true,
                                    translate: ['-120%', 0, -500],
                                },
                                next: {
                                    shadow: true,
                                    translate: ['120%', 0, -500],
                                },
                            }}
                            modules={[EffectCreative]}
                            className={styles.nameAutoSlider}
                        >
                            {autoArray.concat(autoArray, autoArray).map((element, index) =>
                                <SwiperSlide key={index}>
                                    <div className={styles.nameAutoSlide}>
                                        <p className={styles.nameAuto}>{element}</p>
                                        <p className={styles.startPriceAuto}>от 2 890 000 ₽</p>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>



            <div style={{ width: '100%', height: '3000px', marginTop: 80 }}>
                <button style={{ width: 300, height: 100 }}>Main</button>
                <a href='#s'>Main</a>
                <section style={{ margin: '200px 0', position: 'relative' }} className='sectionLink'>
                    <div id='carOrder' style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                    Заказ авто
                </section>
                <section style={{ height: 300, margin: '200px 0', position: 'relative' }} className='sectionLink'>
                    <div id='clientReviews' style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                    Отзывы клиентов
                </section>
                <section style={{ margin: '200px 0', position: 'relative' }} className='sectionLink'>
                    <div id='faq' style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                    FAQ
                </section>
                <section style={{ height: 300, margin: '200px 0', position: 'relative' }} className='sectionLink'>
                    <div id='team' style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                    Команда
                </section>
                <section style={{ height: 300, margin: '200px 0', position: 'relative' }} className='sectionLink'>
                    <div id='aboutUs' style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                    О нас
                </section>
            </div>
        </>
    )
}

export default Main;