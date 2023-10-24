import React, { useEffect, useState, useRef } from 'react';
import styles from './OurAuto.module.scss';

import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { HeaderOnHomepage, SlideChangeButton } from '../../../components';

const OurAuto = () => {

    const [items, setItems] = useState(null)

    async function fetchOurAuto() {
        // const response = await axios.get('http://194.67.121.62:8005/v1/auto/company');
        const response = await axios.get('https://api.ilanavto.ru/v1/auto/company');
        setItems(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchOurAuto()
    }, [])

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
        <section className={styles.container}>
            <HeaderOnHomepage>наши автомобили</HeaderOnHomepage>
            {items && <div className={styles.sliderWrapper}>
                <Swiper
                    ref={listRef}
                    slidesPerView={2}
                    spaceBetween={8}
                    loop={false}
                    className={styles.slider}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        950: {
                            slidesPerView: 4,
                            spaceBetween: 25,
                        },
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {items.map((item, index) =>
                        <SwiperSlide key={index} style={{ height: 'auto' }}>
                            <div className={styles.slideContainer}>
                                <p>{item.name}</p>
                                <video
                                    className='pause'
                                    src={item.video}
                                    controls
                                    onPlay={() => pauseToIndex(index)}
                                ></video>
                            </div>
                        </SwiperSlide>
                    )}
                    <SlideChangeButton isNext={false} position={styles.positionPrev} pause={() => pauseToIndex()} />
                    <SlideChangeButton isNext={true} position={styles.positionNext} pause={() => pauseToIndex()} />
                </Swiper>
            </div>
            }
        </section>
    )
}

export default OurAuto;