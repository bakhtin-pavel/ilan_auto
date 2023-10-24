import React, { useEffect, useState } from 'react';
import styles from './PremiumCar.module.scss';

import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// import premiumSlide1 from '../../assets/img/premium_slide_1.png';
// import premiumSlide2 from '../../assets/img/premium_slide_2.jpg';

import Banner from './Banner/Banner';
import { OrderButton, ModalWindow, ApplicationForm, SocialLink, PremiumSliderButton } from '../../components';
import TechBlock from './TechBlock/TechBlock';
import Specifycation from './Specifycation/Specifycation';

const PremiumCar = () => {

    const [infoOfCar, setInfoOfCar] = useState(null)

    async function fetchInfoOfCar() {
        // const response = await axios.get('http://194.67.121.62:8005/v1/auto/premium');
        const response = await axios.get('https://api.ilanavto.ru/v1/auto/premium');
        setInfoOfCar(response.data.data[0]);
        console.log(response.data.data[0]);
    }

    useEffect(() => {
        fetchInfoOfCar()
    }, [])

    // const arr = [premiumSlide1, premiumSlide2];

    const [modal, setModal] = useState(false);

    // "Логика отключения кнопок при начало/конец"
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleReachEnd = () => {
        setIsEnd(true);
    };

    const handleSlideChange = () => {
        if (isBeginning) setIsBeginning(false);
        if (isEnd) setIsEnd(false);
    };

    const handleReachBeginning = () => {
        setIsBeginning(true);
    };
    // конец "Логика отключения кнопок при начало/конец"

    return (
        <main className={styles.main}>
            {infoOfCar &&
                <Banner
                    photo={infoOfCar.banners[0]}
                    mark={infoOfCar.mark}
                    model={infoOfCar.model}
                    slogan={infoOfCar.slogan}
                    speed={infoOfCar.max_speed}
                    power={infoOfCar.engine_power}
                    volume={infoOfCar.volume}
                    acceleration={infoOfCar.racing}
                />
            }
            <section id='review' className={styles.sectionReview}>
                <div className={styles.topBlockReview}>
                    <div className={styles.headReview}>
                        <h2>{infoOfCar && infoOfCar.mark}</h2>
                        <h2>&nbsp;{infoOfCar && infoOfCar.model}</h2>
                    </div>
                    <p className={styles.textReview}>{infoOfCar && infoOfCar.description}</p>
                    <div className={styles.interactiveBlock}>
                        <OrderButton onClick={() => setModal(true)}>
                            Заказать
                        </OrderButton>
                        <div>
                            <p>Консультация специалиста</p>
                            <SocialLink />
                        </div>
                    </div>
                </div>
                {infoOfCar &&
                    <div className={styles.sliderWrapper}>
                        <Swiper
                            slidesPerView={2}
                            speed={1000}
                            onSlideChange={handleSlideChange}
                            onReachBeginning={handleReachBeginning}
                            onReachEnd={handleReachEnd}
                            className={styles.slider}
                        >
                            {infoOfCar.sliders.map((item, index) =>
                                <SwiperSlide key={index}>
                                    {({ isActive, isNext }) => (
                                        <div className={styles.slideContainer}>
                                            <img src={item} alt="" className={isActive ? styles.leftImg : isNext ? styles.rightImg : styles.slideImg} />
                                        </div>
                                    )}
                                </SwiperSlide>
                            )}
                            <PremiumSliderButton isNext={false} position={styles.positionPrev} isBeginning={isBeginning} />
                            <PremiumSliderButton isNext={true} position={styles.positionNext} isEnd={isEnd} />
                        </Swiper>
                    </div>
                }
            </section>
            {infoOfCar &&
                <TechBlock techItems={infoOfCar.teches} banner={infoOfCar.banners[1]} />
            }
            {infoOfCar &&
                <Specifycation
                    year={infoOfCar.year}
                    bodyType={infoOfCar.body_type}
                    engineType={infoOfCar.engine_type}
                    autoDrive={infoOfCar.auto_drive}
                    transmission={infoOfCar.transmission}
                    mileage={infoOfCar.mileage}
                    speed={infoOfCar.max_speed}
                    power={infoOfCar.engine_power}
                    volume={infoOfCar.volume}
                    acceleration={infoOfCar.racing}
                />
            }
            <section className={styles.sectionApplication}>
                <div className={styles.appWrapper}>
                    <h2>Заявка для заказа авто</h2>
                    <ApplicationForm />
                </div>
                {infoOfCar &&
                    <div className={styles.botFon}>
                        <img src={infoOfCar.banners[2]} alt="" />
                    </div>
                }
            </section>
            <ModalWindow visible={modal} setVisible={setModal}>
                <ApplicationForm close={setModal} modal={modal} />
            </ModalWindow>
        </main>
    )
}

export default PremiumCar;