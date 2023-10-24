import React, { useState, useEffect } from "react";
import styles from "./BaseMainBlock.module.scss";

import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import mainTopImg from "../../../assets/img/main_top_img.png";
import mainTopImgTablet from "../../../assets/img/main_top_img_tablet.png";
import mainTopImgMobile from "../../../assets/img/main_top_img_mobile.png";

import { useWindowSize } from "../../../hooks/useWindowSize";

import {
    SlideChangeButton,
    OrderButton,
    Promotion,
} from "../../../components";

const BaseMainBlock = ({ onClickApplication }) => {
    // Получение баннеров
    const [itemsBanner, setItemsBanner] = useState(null);

    async function fetchBanners() {
        // const response = await axios.get("http://194.67.121.62:8005/v1/banners");
        const response = await axios.get("https://api.ilanavto.ru/v1/banners");
        setItemsBanner(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchBanners();
    }, []);
    // Получение баннеров конец

    // Получение популярных авто
    const [items, setItems] = useState(null);

    async function fetchPopAuto() {
        // const response = await axios.get("http://194.67.121.62:8005/v1/auto/popular");
        const response = await axios.get("https://api.ilanavto.ru/v1/auto/popular");
        setItems(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchPopAuto();
    }, []);
    // Получение популярных авто конец

    const size = useWindowSize();

    const formattedNumberValue = (el) => {
        const str = String(el);
        const formattedValue = str.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return formattedValue;
    };

    return (
        <div className={styles.container}>
            <div className={styles.topBlockContainer}>
                <img
                    src={
                        size.innerWidth > 1024
                            ? mainTopImg
                            : size.innerWidth > 767
                                ? mainTopImgTablet
                                : mainTopImgMobile
                    }
                    alt=""
                    className={styles.topBlockBackgroundImg}
                />
                <div className={styles.topBlock}>

                    {itemsBanner
                        ? itemsBanner.length === 1
                            ? <div className={styles.slideInTopBlock}>

                                {size.innerWidth > 767 &&
                                    <Promotion
                                        timerDate={new Date(itemsBanner[0].timer.replace(' ', 'T'))}
                                        orderClickButton={onClickApplication}
                                    />
                                }

                                <div
                                    className={styles.mainCarName}
                                    dangerouslySetInnerHTML={{ __html: itemsBanner[0].title }}
                                ></div>

                                <img
                                    src={itemsBanner[0].image}
                                    alt=""
                                    className={styles.topBlockCar}
                                />

                                {size.innerWidth < 768 && itemsBanner &&
                                    <Promotion
                                        timerDate={new Date(itemsBanner[0].timer.replace(' ', 'T'))}
                                        orderClickButton={onClickApplication}
                                    />
                                }

                            </div>

                            : <Swiper
                                slidesPerView={1}
                                loop={true}
                                speed={700}
                                className={styles.sliderAkcii}
                            >
                                {itemsBanner.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        {({ isActive }) => (
                                            <div className={styles.slideInTopBlock}>

                                                {size.innerWidth > 767 &&
                                                    <Promotion
                                                        timerDate={new Date(item.timer.replace(' ', 'T'))}
                                                        orderClickButton={onClickApplication}
                                                    />
                                                }

                                                <div
                                                    className={styles.mainCarName}
                                                    dangerouslySetInnerHTML={{ __html: item.title }}
                                                ></div>

                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    className={isActive ? styles.topBlockCar : [styles.topBlockCar, styles.commonCar].join(' ')}
                                                />

                                                {size.innerWidth < 768 && itemsBanner &&
                                                    <Promotion
                                                        timerDate={new Date(item.timer.replace(' ', 'T'))}
                                                        orderClickButton={onClickApplication}
                                                    />
                                                }

                                            </div>
                                        )}
                                    </SwiperSlide>
                                ))}
                                {/* <div className={styles.buttonsAkcii}> */}
                                <SlideChangeButton isNext={false} position={styles.buttonPositionPrev} />
                                <SlideChangeButton isNext={true} position={styles.buttonPositionNext} />
                                {/* </div> */}
                            </Swiper>
                        : null
                    }

                    <div className={styles.rightGradient}></div>

                </div>
            </div>

            <div className={styles.headerContainer}>
                <div></div>
                <h2>Популярные автомобили</h2>
            </div>

            <div className={styles.slider}>
                <div className={styles.sliderWrapper}>
                    {items && (
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
                            {items.concat(items, items).map((item, index) => (
                                <SwiperSlide key={index}>
                                    {({ isActive }) => (
                                        <div
                                            className={isActive ? styles.slideActive : styles.slide}
                                        >
                                            <div className={styles.slideImg}>
                                                <img src={item.photo} alt="" />
                                            </div>
                                            <p className={styles.slideName}>{item.name}</p>
                                            <p className={styles.slidePrice}>
                                                от {formattedNumberValue(item.price)} ₽
                                            </p>
                                        </div>
                                    )}
                                </SwiperSlide>
                            ))}
                            <div className={styles.buttonContainer}>
                                <SlideChangeButton isNext={false} />
                                <SlideChangeButton isNext={true} />
                            </div>
                        </Swiper>
                    )}
                </div>
            </div>

            <div className={styles.orderButtonContainer}>
                <OrderButton onClick={onClickApplication}>Заказать</OrderButton>
            </div>
        </div>
    );
};

export default BaseMainBlock;
