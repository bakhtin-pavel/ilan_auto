import React, { useEffect, useState } from 'react';
import styles from './OurAuto.module.scss';

import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { HeaderOnHomepage, SlideChangeButton } from '../../../components';

const OurAuto = () => {

    const [items, setItems] = useState(null)

    async function fetchOurAuto() {
        const response = await axios.get('http://194.67.121.62:8005/v1/auto/company');
        setItems(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchOurAuto()
    }, [])

    return (
        <section id='faq' className={styles.container}>
            <HeaderOnHomepage>наши автомобили</HeaderOnHomepage>
            {items && <div className={styles.sliderWrapper}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={8}
                    loop={false}
                    className={styles.slider}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1025: {
                            slidesPerView: 4,
                            spaceBetween: 32,
                        },
                    }}
                >
                    {items.map((item, index) =>
                        <SwiperSlide key={index} style={{ height: 'auto' }}>
                            <div className={styles.slideContainer}>
                                <p>{item.name}</p>
                                <video src={item.video} controls></video>
                            </div>
                        </SwiperSlide>
                    )}
                    <SlideChangeButton isNext={false} position={styles.positionPrev} />
                    <SlideChangeButton isNext={true} position={styles.positionNext} />
                </Swiper>
            </div>
            }
        </section>
    )
}

export default OurAuto;