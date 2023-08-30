import React from 'react';

import styles from './Main.module.scss';

import BaseMainBlock from './BaseMainBlock/BaseMainBlock';

const Main = () => {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.mainBackgroundFon}>
                    <BaseMainBlock />
                </div>



                <div style={{ width: '100%', height: '3000px', marginTop: 80 }}>
                    <button style={{ width: 300, height: 100 }}>Main</button>
                    <a href='#s'>Main</a>
                    <section id='carOrder' style={{ margin: '200px 0', position: 'relative' }} className='sectionLink'>
                        <div style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                        Заказ авто
                    </section>
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