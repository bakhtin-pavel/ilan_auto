import React, { useEffect, useState } from 'react';
import styles from './ReviewsBlock.module.scss';

import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { HeaderOnHomepage, SlideChangeButton } from '../../../components';

const ReviewsBlock = () => {

    const [items, setItems] = useState(null)

    async function fetchReviews() {
        const response = await axios.get('http://194.67.121.62:8005/v1/reviews');
        setItems(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    const [razvorot, setRazvorot] = useState(false);

    return (
        <section id='clientReviews' className={styles.container}>
            <HeaderOnHomepage>Отзывы клиентов</HeaderOnHomepage>
            <div className={styles.sliderTopWrapper}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    className={styles.sliderTop}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1025: {
                            slidesPerView: 2,
                            spaceBetween: 32,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 32,
                        },
                    }}
                >
                    {items && items.concat(items, items).filter((item) => item.type === 'photo').map((photoItem, index) =>
                        <SwiperSlide key={index}>
                            <div className={styles.slideContainer}>
                                <div className={styles.imgWrapper}>
                                    <img src={photoItem.image} alt="" />
                                </div>
                                <div className={razvorot ? styles.reviews : styles.reviewsHide}>
                                    <span>{photoItem.title}</span>
                                    <div>
                                        <p>{photoItem.text}</p>
                                    </div>
                                </div>
                                <button onClick={() => setRazvorot(!razvorot)}>{razvorot ? 'Свернуть' : 'Развернуть'}</button>
                            </div>
                        </SwiperSlide>
                    )}
                    <SlideChangeButton isNext={false} position={styles.positionPrev} />
                    <SlideChangeButton isNext={true} position={styles.positionNext} />
                </Swiper>
            </div>
        </section>
    )
}

export default ReviewsBlock;