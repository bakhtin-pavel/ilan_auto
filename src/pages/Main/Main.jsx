import React, { useState, useEffect } from 'react';

import styles from './Main.module.scss';

import videoPreview from '../../assets/video/1920x688.mp4';

import { useWindowSize } from "../../hooks/useWindowSize";

import BaseMainBlock from './BaseMainBlock/BaseMainBlock';
import OrderCar from './OrderCar/OrderCar';
import ReviewsBlock from './ReviewsBlock/ReviewsBlock';
import OurAuto from './OurAuto/OurAuto';
import WorkPoint from './WorkPoint/WorkPoint';
// import Auctions from './Auctions/Auctions';
import FAQ from './FAQ/FAQ';
import Advantages from './Advantages/Advantages';
import { Logo, ModalWindow, ApplicationForm, } from '../../components';
import { CurrentTimeIcon } from '../../assets/icons';
// import About from './About/About';

const Main = () => {

    const [targetCurrentTime, setTargetCurrentTime] = useState(
        {
            tokioAndCeyl: '00:00',
            krasnoyrsk: '00:00',
        }
    )

    useEffect(() => {

        const currentTimeFunc = () => {
            const currentTime = new Date();
            // Получение текущего смещения временной зоны в минутах
            const currentOffset = currentTime.getTimezoneOffset();
            // Вычисление необходимого смещения временной зоны в минутах
            const tokioAndCeylOffset = -540;
            const krasnoyrskOffset = -420;

            const tokioAndCeylDiff = currentOffset - tokioAndCeylOffset;
            const krasnoyrskDiff = currentOffset - krasnoyrskOffset;
            // Вычисление нового времени с учетом нового смещения временной зоны
            const tokioAndCeylTime = new Date(currentTime.getTime() + (tokioAndCeylDiff * 60000));
            const krasnoyrskTime = new Date(currentTime.getTime() + (krasnoyrskDiff * 60000));

            const hoursTokio = tokioAndCeylTime.getHours();
            const hoursKrasnoyrsk = krasnoyrskTime.getHours();
            const minutes = krasnoyrskTime.getMinutes();

            setTargetCurrentTime(
                {
                    tokioAndCeyl: `${hoursTokio > 9 ? hoursTokio : `0${hoursTokio}`}:${minutes > 9 ? minutes : `0${minutes}`}`,
                    krasnoyrsk: `${hoursKrasnoyrsk > 9 ? hoursKrasnoyrsk : `0${hoursKrasnoyrsk}`}:${minutes > 9 ? minutes : `0${minutes}`}`,
                }
            )
        }

        currentTimeFunc()

        const timeCount = setInterval(currentTimeFunc, 20000);

        return () => clearInterval(timeCount);
    }, []);

    const [modal, setModal] = useState(false);
    const { innerWidth } = useWindowSize();

    return (
        <>
            <div className={styles.main}>
                {innerWidth < 768 &&
                    <div className={styles.timeContainer}>
                        <div className={styles.timeBlock}>
                            <CurrentTimeIcon />
                            <div></div>
                            <p>Токио</p>
                            <div></div>
                            <p>{targetCurrentTime.tokioAndCeyl}</p>
                        </div>
                        <div className={styles.timeBlock}>
                            <CurrentTimeIcon />
                            <div></div>
                            <p>Красноярск</p>
                            <div></div>
                            <p>{targetCurrentTime.krasnoyrsk}</p>
                        </div>
                        <div className={styles.timeBlock}>
                            <CurrentTimeIcon />
                            <div></div>
                            <p>Сеул</p>
                            <div></div>
                            <p>{targetCurrentTime.tokioAndCeyl}</p>
                        </div>
                    </div>
                }
                <div className={styles.videoWrapper}>
                    <video
                        src={videoPreview}
                        autoPlay
                        muted
                        playsInline
                        loop
                    ></video>
                    <div className={styles.plashka}>
                        <Logo styles={styles.logoOnVideo} />
                        <div className={styles.decor}></div>
                        <p>Подбор и доставка{"\n"}автомобилей</p>
                        <a href="#carOrder">
                            <button className={styles.btn}>Заказать</button>
                        </a>
                    </div>
                    {innerWidth > 767 &&
                        <div className={styles.timeContainer}>
                            <div className={styles.timeBlock}>
                                <CurrentTimeIcon />
                                <div></div>
                                <p>Токио</p>
                                <div></div>
                                <p>{targetCurrentTime.tokioAndCeyl}</p>
                            </div>
                            <div className={styles.timeBlock}>
                                <CurrentTimeIcon />
                                <div></div>
                                <p>Красноярск</p>
                                <div></div>
                                <p>{targetCurrentTime.krasnoyrsk}</p>
                            </div>
                            <div className={styles.timeBlock}>
                                <CurrentTimeIcon />
                                <div></div>
                                <p>Сеул</p>
                                <div></div>
                                <p>{targetCurrentTime.tokioAndCeyl}</p>
                            </div>
                        </div>
                    }
                </div>
                <div className={styles.mainBackgroundFon}>
                    <BaseMainBlock onClickApplication={() => setModal(true)} />
                    <OrderCar />
                    {/* <Auctions /> */}
                    <ReviewsBlock />
                </div>
                <FAQ />
                <OurAuto />
                {/* <About /> */}
                <Advantages />
                <WorkPoint />
                <ModalWindow visible={modal} setVisible={setModal}>
                    <ApplicationForm close={setModal} modal={modal} />
                </ModalWindow>
            </div>
        </>
    )
}

export default Main;