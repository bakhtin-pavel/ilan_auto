import React from 'react';

import styles from './Main.module.scss';

import videoPreview from '../../assets/video/1920x688.mp4';

import BaseMainBlock from './BaseMainBlock/BaseMainBlock';
import OrderCar from './OrderCar/OrderCar';
import ReviewsBlock from './ReviewsBlock/ReviewsBlock';
import OurAuto from './OurAuto/OurAuto';
import WorkPoint from './WorkPoint/WorkPoint';
// import Auctions from './Auctions/Auctions';
import FAQ from './FAQ/FAQ';
import Advantages from './Advantages/Advantages';
import { Logo, OrderButton } from '../../components';
// import About from './About/About';

const Main = () => {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.videoWrapper}>
                    <video
                        src={videoPreview}
                        autoPlay
                        muted
                        loop
                    ></video>
                    <div>
                        <Logo styles={styles.logoOnVideo} />
                        <p>Подбор и доставка автомобилей</p>
                        <a href="#carOrder">
                            <OrderButton>Заказать</OrderButton>
                        </a>
                    </div>
                </div>
                <div className={styles.mainBackgroundFon}>
                    <BaseMainBlock />
                    <OrderCar />
                    {/* <Auctions /> */}
                    <ReviewsBlock />
                </div>
                <FAQ />
                <OurAuto />
                {/* <About /> */}
                <Advantages />
                <WorkPoint />
            </div>
        </>
    )
}

export default Main;