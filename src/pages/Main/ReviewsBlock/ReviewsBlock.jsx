import React, { useEffect, useState, useRef } from 'react';
import styles from './ReviewsBlock.module.scss';

import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { HeaderOnHomepage, SlideChangeButton } from '../../../components';
import { useWindowSize } from '../../../hooks/useWindowSize';

const ReviewsBlock = () => {

    const [items, setItems] = useState(null)

    async function fetchReviews() {
        // const response = await axios.get('http://194.67.121.62:8005/v1/reviews');
        const response = await axios.get('https://api.ilanavto.ru/v1/reviews');
        setItems(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchReviews()
    }, [])

    const [razvorot, setRazvorot] = useState(false);

    const { innerWidth } = useWindowSize();

    const listRef = useRef(null);
    const [currentVideo, setCurrentVideo] = useState(null);

    function pauseToIndex(index) {
        const listNode = listRef.current;

        if (currentVideo) {
            if (index === undefined) {
                currentVideo.pause();
                setCurrentVideo(false);
                return
            }
            const videoNode = listNode.querySelectorAll('.pause')[index];
            if (currentVideo === videoNode) {
                return
            }
            currentVideo.pause();
            setCurrentVideo(videoNode);
            return
        }
        if (index === undefined) return;
        const videoNode = listNode.querySelectorAll('.pause')[index];
        setCurrentVideo(videoNode);
    }

    return (
        <section id='clientReviews' className={styles.container}>
            <HeaderOnHomepage>Отзывы клиентов</HeaderOnHomepage>
            {items &&
                <div className={styles.sliderTopWrapper}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        // centerInsufficientSlides={true}
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
                        {items.filter((item) => item.type === 'photo').map((photoItem, index) =>
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
                        {items.filter((item) => item.type === 'photo').length > 3 && innerWidth > 1439 &&
                            <>
                                <SlideChangeButton isNext={false} position={styles.positionPrev} />
                                <SlideChangeButton isNext={true} position={styles.positionNext} />
                            </>
                        }
                        {items.filter((item) => item.type === 'photo').length > 2 && innerWidth > 767 &&
                            <>
                                <SlideChangeButton isNext={false} position={styles.positionPrev} />
                                <SlideChangeButton isNext={true} position={styles.positionNext} />
                            </>
                        }
                        {items.filter((item) => item.type === 'photo').length > 1 && innerWidth < 768 &&
                            <>
                                <SlideChangeButton isNext={false} position={styles.positionPrev} />
                                <SlideChangeButton isNext={true} position={styles.positionNext} />
                            </>
                        }
                    </Swiper>
                </div>
            }

            {items && items.filter((item) => item.type === 'video').length &&
                <div className={styles.sliderBotWrapper}>
                    <Swiper
                        ref={listRef}
                        slidesPerView={1}
                        spaceBetween={0}
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
                        {items.filter((item) => item.type === 'video').map((videoItem, index) =>
                            <SwiperSlide key={index}>
                                <div className={styles.slideVideo}>
                                    <p>{videoItem.title}</p>
                                    <video
                                        src={videoItem.video}
                                        controls
                                        className='pause'
                                        onPlay={() => pauseToIndex(index)}
                                    ></video>
                                </div>
                            </SwiperSlide>
                        )}
                        {items.filter((item) => item.type === 'photo').length > 1 && innerWidth < 768 &&
                            <>
                                <SlideChangeButton isNext={false} position={styles.positionPrev} pause={() => pauseToIndex()} />
                                <SlideChangeButton isNext={true} position={styles.positionNext} pause={() => pauseToIndex()} />
                            </>
                        }
                        {items.filter((item) => item.type === 'photo').length > 2 && innerWidth > 767 &&
                            <>
                                <SlideChangeButton isNext={false} position={styles.positionPrev} pause={() => pauseToIndex()} />
                                <SlideChangeButton isNext={true} position={styles.positionNext} pause={() => pauseToIndex()} />
                            </>
                        }
                        {items.filter((item) => item.type === 'photo').length > 3 && innerWidth > 1439 &&
                            <>
                                <SlideChangeButton isNext={false} position={styles.positionPrev} pause={() => pauseToIndex()} />
                                <SlideChangeButton isNext={true} position={styles.positionNext} pause={() => pauseToIndex()} />
                            </>
                        }
                    </Swiper>
                </div>
            }
        </section>
    )
}

export default ReviewsBlock;