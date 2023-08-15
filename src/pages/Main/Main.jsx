import React from 'react';

import mainTopImg from '../../assets/img/main_top_img.png';

const Main = () => {
    return (
        <>
            <img src={mainTopImg} alt="" style={{ width: '100%' }} />
            <div style={{ width: '100%', height: '3000px', marginTop: 80 }}>
                <button style={{ width: 300, height: 100 }}>Main</button>
                <a href='#s'>Main</a>
                <section style={{ margin: '200px 0', position: 'relative' }} className='sectionLink'>
                    <div id='carOrder' style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                    Заказ авто
                </section>
                <section style={{ height: 300, margin: '200px 0', position: 'relative' }} className='sectionLink'>
                    <div id='clientReviews' style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                    Отзывы клиентов
                </section>
                <section style={{ margin: '200px 0', position: 'relative' }} className='sectionLink'>
                    <div id='faq' style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                    FAQ
                </section>
                <section style={{ height: 300, margin: '200px 0', position: 'relative' }} className='sectionLink'>
                    <div id='team' style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                    Команда
                </section>
                <section style={{ height: 300, margin: '200px 0', position: 'relative' }} className='sectionLink'>
                    <div id='aboutUs' style={{ position: 'absolute', top: '-200px', left: 0 }}></div>
                    О нас
                </section>
            </div>
        </>
    )
}

export default Main;