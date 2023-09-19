import React from 'react';

import styles from './Main.module.scss';

import BaseMainBlock from './BaseMainBlock/BaseMainBlock';
import OrderCar from './OrderCar/OrderCar';
import ReviewsBlock from './ReviewsBlock/ReviewsBlock';
import OurAuto from './OurAuto/OurAuto';
import WorkPoint from './WorkPoint/WorkPoint';
// import Auctions from './Auctions/Auctions';
import FAQ from './FAQ/FAQ';
import Advantages from './Advantages/Advantages';
// import About from './About/About';

const Main = () => {

    return (
        <>
            <div className={styles.main}>
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