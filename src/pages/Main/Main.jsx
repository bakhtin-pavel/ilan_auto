import React from 'react';

import styles from './Main.module.scss';

import BaseMainBlock from './BaseMainBlock/BaseMainBlock';
import OrderCar from './OrderCar/OrderCar';
import ReviewsBlock from './ReviewsBlock/ReviewsBlock';
import OurAuto from './OurAuto/OurAuto';
import WorkPoint from './WorkPoint/WorkPoint';

const Main = () => {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainBackgroundFon}>
                    <BaseMainBlock />
                    <OrderCar />
                    <ReviewsBlock />
                </div>
                <OurAuto />
                <WorkPoint />



                <div>
                    <section id='team'>
                    </section>
                    <section id='aboutUs'>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Main;