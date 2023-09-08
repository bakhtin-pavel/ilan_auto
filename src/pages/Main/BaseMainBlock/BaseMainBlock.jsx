import React, { useState, useEffect } from 'react';
import styles from './BaseMainBlock.module.scss';

import axios from 'axios';

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

import { SlideChangeButton, OrderButton, ModalWindow, ApplicationForm } from '../../../components';

const BaseMainBlock = () => {

    const myArray = [
        { img: auto1, name: 'acura', },
        { img: auto2, name: 'isuzu', },
        { img: auto3, name: 'acura x-trail', },
        { img: auto3, name: 'acura 365', },
    ];

    const [itemsBanner, setItemsBanner] = useState(null)

    async function fetchBanners() {
        const response = await axios.get('http://194.67.121.62:8005/v1/banners');
        setItemsBanner(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchBanners()
    }, [])

    const [items, setItems] = useState(null)

    async function fetchPopAuto() {
        const response = await axios.get('http://194.67.121.62:8005/v1/auto/popular');
        setItems(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchPopAuto()
    }, [])

    const formattedNumberValue = (el) => {
        const str = String(el);
        const formattedValue = str.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return formattedValue
    }

    const size = useWindowSize();

    const [modal, setModal] = useState(false);

    return (
        <div className={styles.container}>

            <div className={styles.topBlockContainer}>
                <img
                    src={size.innerWidth > 1024 ? mainTopImg : size.innerWidth > 767 ? mainTopImgTablet : mainTopImgMobile}
                    alt="" className={styles.topBlockBackgroundImg}
                />
                <div className={styles.topBlock}>
                    {itemsBanner && <div
                        className={styles.mainCarName}
                        dangerouslySetInnerHTML={{ __html: itemsBanner[0].title }}
                    ></div>}
                    {itemsBanner && <img src={itemsBanner[0].image} alt="" className={styles.topBlockCar} />}
                    <div className={styles.rightGradient}></div>
                </div>
            </div>

            <div className={styles.headerContainer}>
                <div></div>
                <h2>Популярные автомобили</h2>
            </div>

            <div className={styles.slider}>
                <div className={styles.sliderWrapper}>
                    {items &&
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
                            {items.concat(items, items).map((item, index) =>
                                <SwiperSlide key={index}>
                                    {({ isActive }) => (
                                        <div className={isActive ? styles.slideActive : styles.slide}>
                                            <div className={styles.slideImg}>
                                                <img src={item.photo} alt="" />
                                            </div>
                                            <p className={styles.slideName}>{item.name}</p>
                                            <p className={styles.slidePrice}>от {formattedNumberValue(item.price)} ₽</p>
                                        </div>
                                    )}
                                </SwiperSlide>
                            )}
                            <div className={styles.buttonContainer}>
                                <SlideChangeButton isNext={false} />
                                <SlideChangeButton isNext={true} />
                            </div>
                        </Swiper>
                    }
                </div>
            </div>

            <div className={styles.orderButtonContainer}>
                <OrderButton onClick={() => setModal(true)}>
                    Заказать
                </OrderButton>
            </div>
            <ModalWindow visible={modal} setVisible={setModal}>
                <ApplicationForm close={setModal} />
            </ModalWindow>
        </div>
    )
}

export default BaseMainBlock