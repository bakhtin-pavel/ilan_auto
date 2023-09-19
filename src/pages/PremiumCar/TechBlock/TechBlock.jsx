import React, { useState } from 'react';
import styles from './TechBlock.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import techImg1 from '../../../assets/img/technologies_img_1.jpg';
import techImg2 from '../../../assets/img/technologies_img_2.jpg';
import techImg3 from '../../../assets/img/technologies_img_3.jpg';
import techFon from '../../../assets/img/premium_tech_fon.jpg';

import { PremiumSliderButton } from '../../../components';

const TechBlock = () => {

    const arr2 = [
        {
            img: techImg1,
            head: '8-цилиндровый бензиновый двигатель BMW М TwinPower Turbo',
            text: 'При мощности 467 кВт (635 л.с.) и крутящем моменте 750 Нм, 8-цилиндровый бензиновый двигатель BMW M TwinPower Turbo разгоняет автомобиль с 0 до 100 км/ч за 3,0 с. Благодаря двум турбонагнетателям TwinScroll, системе высокоточного впрыска и системе управления ходом клапанов Valvetronic, 4,4-литровый двигатель развивает впечатляющую мощность даже на низких оборотах, а также отличается высокой отзывчивостью и огромным крутящим моментом.',
        },
        {
            img: techImg2,
            head: 'Карбоно-керамическая тормозная система M с красными суппортами',
            text: 'Карбоно-керамическая тормозная система M обеспечивает еще более точные реакции, не подвержена коррозии, обладает высокой устойчивостью к перегреву и износу, а также способствует сокращению массы автомобиля, что положительно сказывается на управляемости и динамике.',
        },
        {
            img: techImg3,
            head: 'Выхлопная система M Sport',
            text: 'Выхлопная система M Sport с особыми сдвоенными патрубками из нержавеющей стали генерирует динамичный звук, который может изменяться с помощью управляемой заслонки, встроенной в систему выпуска. В режимах SPORT и SPORT+, активируемых с помощью кнопок выбора режимов движения, используется еще более насыщенный звук двигателя.',
        }
    ];
    const [razvorot, setRazvorot] = useState(false);

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
        <section id='technologies' className={styles.sectionTechnologies}>
            <div className={styles.padding}>
                <h2>Технологии</h2>
                <div className={styles.sliderTechWrapper}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        speed={500}
                        onSlideChange={handleSlideChange}
                        onReachBeginning={handleReachBeginning}
                        onReachEnd={handleReachEnd}
                        className={styles.sliderTech}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1025: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                            // 1200: {
                            //     slidesPerView: 4,
                            //     spaceBetween: 30,
                            // },
                        }}
                    >
                        {arr2.map((item, index) =>
                            <SwiperSlide key={index}>
                                <div className={styles.slideTech}>
                                    <img src={item.img} alt="" />
                                    <div className={razvorot ? styles.reviews : styles.reviewsHide}>
                                        <span>{item.head}</span>
                                        <div>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => setRazvorot(!razvorot)}>{razvorot ? 'Свернуть' : 'Развернуть'}</button>
                                </div>
                            </SwiperSlide>
                        )}
                        <PremiumSliderButton isNext={false} position={styles.positionPrev} isBeginning={isBeginning} />
                        <PremiumSliderButton isNext={true} position={styles.positionNext} isEnd={isEnd} />
                    </Swiper>
                </div>
            </div>
            <div className={styles.techFon}>
                <img src={techFon} alt="" />
            </div>
        </section>
    )
}

export default TechBlock;