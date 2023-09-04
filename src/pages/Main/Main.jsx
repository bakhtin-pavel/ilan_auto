import React from 'react';

import styles from './Main.module.scss';

import BaseMainBlock from './BaseMainBlock/BaseMainBlock';
import OrderCar from './OrderCar/OrderCar';

const Main = () => {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainBackgroundFon}>
                    <BaseMainBlock />
                    <OrderCar />
                </div>



                <div style={{ width: '100%', height: '3000px', marginTop: 80 }}>
                    <section id='clientReviews' style={{ height: 300, margin: '200px 0', position: 'relative' }} className='sectionLink'>
                        <div style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                        Отзывы клиентов
                    </section>
                    <section id='faq' style={{ margin: '200px 0', position: 'relative' }} className='sectionLink'>
                        <div style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                        FAQ
                    </section>
                    <section id='team' style={{ height: 300, margin: '200px 0', position: 'relative' }} className='sectionLink'>
                        <div style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                        Команда
                    </section>
                    <section id='aboutUs' style={{ height: 300, margin: '200px 0', position: 'relative' }} className='sectionLink'>
                        <div style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                        О нас
                    </section>
                </div>
            </div>
        </>
    )
}

export default Main;