import React, { useState } from 'react';
import styles from './PremiumCar.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import premiumSlide1 from '../../assets/img/premium_slide_1.png';
import premiumSlide2 from '../../assets/img/premium_slide_2.jpg';

import Banner from './Banner/Banner';
import { OrderButton, ModalWindow, ApplicationForm, SocialLink, PremiumSliderButton } from '../../components';
import TechBlock from './TechBlock/TechBlock';
import Specifycation from './Specifycation/Specifycation';

const PremiumCar = () => {

    const arr = [premiumSlide1, premiumSlide2];

    const [modal, setModal] = useState(false);

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

    return (
        <main className={styles.main}>
            <Banner />
            <section id='review' className={styles.sectionReview}>
                <div className={styles.topBlockReview}>
                    <div className={styles.headReview}>
                        <h2>BMW M5 </h2>
                        <h2>&nbsp;Competition</h2>
                    </div>
                    <p className={styles.textReview}>Автомобили M BMW 5 серии впечатляющим образом сочетают в себе фирменную спортивность BMW M с комфортом и элегантностью седана бизнес-класса. Познакомьтесь с тремя уникальными автомобилями BMW M с яркими характерами. Быстрейший в истории, новый BMW M5 CS с двигателем мощностью в 635 л.с. (467 кВт) и разгоном до 100 км/ч за рекордные 3 секунды. Оснащенный двигателем мощностью 625 л.с. (460 кВт) и подвеской с гоночными настройками BMW M5 Competition с системой полного привода M xDrive олицетворяет собой эталон динамики.</p>
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
                <div className={styles.sliderWrapper}>
                    <Swiper
                        slidesPerView={2}
                        speed={1000}
                        onSlideChange={handleSlideChange}
                        onReachBeginning={handleReachBeginning}
                        onReachEnd={handleReachEnd}
                        className={styles.slider}
                    >
                        {arr.concat(arr).map((item, index) =>
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
            </section>
            <TechBlock />
            <Specifycation />
            <ModalWindow visible={modal} setVisible={setModal}>
                <ApplicationForm close={setModal} />
            </ModalWindow>
        </main>
    )
}

export default PremiumCar;