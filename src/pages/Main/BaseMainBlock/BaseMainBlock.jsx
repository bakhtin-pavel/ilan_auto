import React, { useState, useEffect } from "react";
import styles from "./BaseMainBlock.module.scss";

import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { CSSTransition } from "react-transition-group";

import mainTopImg from "../../../assets/img/main_top_img.png";
import mainTopImgTablet from "../../../assets/img/main_top_img_tablet.png";
import mainTopImgMobile from "../../../assets/img/main_top_img_mobile.png";

import { useWindowSize } from "../../../hooks/useWindowSize";

import {
    SlideChangeButton,
    OrderButton,
    ModalWindow,
    ApplicationForm,
    Promotion,
} from "../../../components";

const BaseMainBlock = () => {
    const [itemsBanner, setItemsBanner] = useState(null);
    const [timerDate, setTimerDate] = useState(null);

    async function fetchBanners() {
        // const response = await axios.get("http://194.67.121.62:8005/v1/banners");
        const response = await axios.get("https://api.ilanavto.ru/v1/banners");
        setItemsBanner(response.data.data);
        setTimerDate(new Date(response.data.data[0].timer));
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchBanners();
    }, []);

    const [timeLeft, setTimeLeft] = useState('00:00:00:00');

    useEffect(() => {

        const timer = setInterval(() => {
            if (timerDate) {
                const now = new Date().getTime();
                const distance = timerDate.getTime() - now;

                const days = Math.floor(distance / (86400000));
                const hours = Math.floor((distance % (86400000)) / (3600000));
                const minutes = Math.floor((distance % (3600000)) / (60000));
                const seconds = Math.floor((distance % (60000)) / 1000);

                setTimeLeft(`${days > 9 ? days : `0${days}`}:${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`);

                if (distance < 0) {
                    clearInterval(timer);
                    setTimeLeft('00:00:00:00');
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timerDate]);

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

    const formattedNumberValue = (el) => {
        const str = String(el);
        const formattedValue = str.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return formattedValue;
    };

    const size = useWindowSize();
    const [modal, setModal] = useState(false);
    const [isVideo, setIsVideo] = useState(false);

    // const handleVideoEnd = () => {
    //     setIsVideo(false);
    // };

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
                    {size.innerWidth > 767 && itemsBanner && (
                        <CSSTransition
                            in={!isVideo}
                            timeout={600}
                            unmountOnExit
                            classNames={{
                                enter: styles.promotionEnter,
                                enterActive: styles.promotionEnterActive,
                                exit: styles.promotionExit,
                                exitActive: styles.promotionExitActive,
                            }}
                        >
                            <Promotion
                                timer={timeLeft}
                                orderClickButton={setModal}
                            />
                        </CSSTransition>
                    )}

                    {/* {itemsBanner && (
                        <CSSTransition
                            in={isVideo}
                            timeout={900}
                            unmountOnExit
                            classNames={{
                                enter: styles.videoEnter,
                                enterActive: styles.videoEnterActive,
                                exit: styles.videoExit,
                                exitActive: styles.videoExitActive,
                            }}
                        >
                            <div className={styles.videoTopWrapper}>
                                <video
                                    src={itemsBanner[1].video}
                                    autoPlay
                                    muted
                                    onEnded={handleVideoEnd}
                                    className={styles.videoTop}
                                ></video>
                            </div>
                        </CSSTransition>
                    )} */}

                    {itemsBanner && (
                        <CSSTransition
                            in={!isVideo}
                            timeout={600}
                            unmountOnExit
                            classNames={{
                                enter: styles.carNameEnter,
                                enterActive: styles.carNameEnterActive,
                                exit: styles.carNameExit,
                                exitActive: styles.carNameExitActive,
                            }}
                        >
                            <div
                                className={styles.mainCarName}
                                dangerouslySetInnerHTML={{ __html: itemsBanner[0].title }}
                            ></div>
                        </CSSTransition>
                    )}

                    {itemsBanner && (
                        <CSSTransition
                            in={!isVideo}
                            timeout={600}
                            unmountOnExit
                            classNames={{
                                enter: styles.carTopEnter,
                                enterActive: styles.carTopEnterActive,
                                exit: styles.carTopExit,
                                exitActive: styles.carTopExitActive,
                            }}
                        >
                            <img
                                src={itemsBanner[0].image}
                                alt=""
                                className={styles.topBlockCar}
                            />
                        </CSSTransition>
                    )}
                    <div className={styles.rightGradient}></div>
                    {/* <div className={styles.buttonChangeContainer}>
                        <button
                            style={isVideo ? null : { background: "#fff" }}
                            onClick={() => setIsVideo(false)}
                        ></button>
                        <button
                            style={isVideo ? { background: "#fff" } : null}
                            onClick={() => setIsVideo(true)}
                        ></button>
                    </div> */}

                    {size.innerWidth < 768 && itemsBanner && (
                        <Promotion
                            timer={timeLeft}
                            orderClickButton={setModal}
                            isMobileVideo={isVideo}
                        />
                    )}
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
                <OrderButton onClick={() => setModal(true)}>Заказать</OrderButton>
            </div>
            <ModalWindow visible={modal} setVisible={setModal}>
                <ApplicationForm close={setModal} />
            </ModalWindow>
        </div>
    );
};

export default BaseMainBlock;
