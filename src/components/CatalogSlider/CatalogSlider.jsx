import React, { useEffect, useRef, useState } from "react";

import styles from "./CatalogSlider.module.scss";
import { classnames, formateDigitsString } from "../../utils";
import FigureBlock from "../FigureBlock/FigureBlock";
import Button from "../Button/Button";
import SocialLink from "../SocialLink/SocialLink";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    MobileNextSliderArrow,
    MobilePrevSliderArrow,
    NextSliderArrow,
    PrevSliderArrow,
} from "../../assets/icons";
import { useWindowSize } from "../../hooks/useWindowSize";

import { ModalWindow, ApplicationForm } from '../index';

const CatalogSlider = ({ item }) => {
    const autoInfo = item;
    const [sliderWidth, setSliderWidth] = useState(100);
    const [slider1, setSlider1] = useState();
    const [slider2, setSlider2] = useState();
    const [modal, setModal] = useState(false);

    const date = new Date();
    const currentYear = date.getFullYear();

    const { innerWidth } = useWindowSize();

    const isMobile = innerWidth < 768;
    const isDescktop = innerWidth > 1200;
    const isTablet = !isMobile && !isDescktop;

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return !isMobile ? (
            <NextSliderArrow
                onClick={onClick}
                className={className}
                style={{ ...style, height: "100%", right: -32 }}
            />
        ) : (
            <MobileNextSliderArrow
                onClick={onClick}
                className={className}
                style={{ ...style, height: "100%", right: -32 }}
            />
        );
    }

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return !isMobile ? (
            <PrevSliderArrow
                onClick={onClick}
                className={className}
                style={{ ...style, height: "100%", right: -32 }}
            />
        ) : (
            <MobilePrevSliderArrow
                onClick={onClick}
                className={className}
                style={{ ...style, height: "100%", right: -32 }}
            />
        );
    };

    const mainSliderOptions = {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const secondSliderOptions = {
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: slider1,
        arrows: false,
        centerPadding: "-10px",
        centerMode: true,
        className: "center",
    };

    const sliderWrapperRef = useRef(null);

    useEffect(() => {
        setSliderWidth(sliderWrapperRef.current.clientWidth);
    }, [sliderWrapperRef]);

    const calculateProgressLineWidth = (start, current, total) => {
        return ((current - start) / (total - start)) * 100;
    };

    return (
        <div className={styles.catalogSliderWrapper}>
            <div className={styles.slider}>
                <div className={styles.sliderTitle}>
                    <p className={styles.title}>{autoInfo.model}</p>
                    <p className={styles.subtitle}>{autoInfo.mark}</p>
                </div>
                <div className={styles.sliderImages} ref={sliderWrapperRef}>
                    <Slider
                        className={styles.sliderMain}
                        style={{ width: sliderWidth }}
                        {...mainSliderOptions}
                        ref={(slider) => setSlider1(slider)}
                        asNavFor={slider2}
                    >
                        {autoInfo.images.map((item, index) => (
                            <img
                                key={index}
                                className={styles.mainImage}
                                src={item}
                                alt=""
                            />
                        ))}
                    </Slider>
                    {!isMobile && (
                        <Slider
                            {...secondSliderOptions}
                            style={{ width: sliderWidth }}
                            className={styles.sliderSecond}
                            ref={(slider) => setSlider2(slider)}
                        >
                            {autoInfo.images.map((item, index) => (
                                <img
                                    key={index}
                                    className={styles.secondImage}
                                    src={item}
                                    alt=""
                                />
                            ))}
                        </Slider>
                    )}
                    {isTablet && (
                        <div className={styles.getConsultant}>
                            <span>Консультация специалиста</span>
                            <SocialLink />
                        </div>
                    )}
                </div>
            </div>
            <div>
                <div className={styles.stats}>
                    <div className={styles.statsItem}>
                        <span className={styles.name}>марка</span>
                        <span className={styles.value}>{autoInfo.mark}</span>
                    </div>
                    <div className={styles.statsItem}>
                        <span className={styles.name}>модель</span>
                        <span className={styles.value}>{autoInfo.model}</span>
                    </div>
                    <div className={styles.statsItem}>
                        <span className={styles.name}>тип кузова</span>
                        <span className={styles.value}>{autoInfo.body_type}</span>
                    </div>
                    <div className={styles.statsItem}>
                        <span className={styles.name}>тип двигателя</span>
                        <span className={styles.value}>{autoInfo.engine_type}</span>
                    </div>
                    <div className={styles.statsItem}>
                        <span className={styles.name}>привод</span>
                        <span className={styles.value}>{autoInfo.auto_drive}</span>
                    </div>
                    <div className={styles.statsItem}>
                        <span className={styles.name}>коробка передач</span>
                        <span className={styles.value}>{autoInfo.transmission}</span>
                    </div>
                    <div className={styles.statsItem}>
                        <span className={styles.name}>пробег (км)</span>
                        <span className={styles.value}>
                            {formateDigitsString(autoInfo.mileage)}
                        </span>
                    </div>

                    <div className={styles.statsItem}>
                        <span className={styles.name}>год</span>
                        <div className={styles.statsWrap}>
                            <FigureBlock className={styles.diagrams}>
                                <FigureBlock
                                    className={styles.activeDiagrams}
                                    style={{
                                        width:
                                            calculateProgressLineWidth(
                                                2010,
                                                autoInfo.year,
                                                currentYear
                                            ) + "%",
                                    }}
                                ></FigureBlock>
                            </FigureBlock>
                            <span className={styles.value}>{autoInfo.year}</span>
                        </div>
                    </div>
                    <div className={styles.statsItem}>
                        <span className={styles.name}>объем двигателя</span>
                        <div className={styles.statsWrap}>
                            <FigureBlock className={styles.diagrams}>
                                <FigureBlock
                                    className={styles.activeDiagrams}
                                    style={{
                                        width:
                                            calculateProgressLineWidth(0, autoInfo.racing, 10) + "%",
                                    }}
                                ></FigureBlock>
                            </FigureBlock>
                            <span className={styles.value}>
                                {`${formateDigitsString(autoInfo.racing, 1, 1)} л.`}
                            </span>
                        </div>
                    </div>
                    <div className={styles.statsItem}>
                        <span className={styles.name}>цена без доставки</span>
                        <div className={styles.priceBlock}>
                            <span
                                className={classnames([
                                    styles.priceValue,
                                    [styles.hasExtraPrice, autoInfo.price2],
                                ])}
                            >
                                {formateDigitsString(autoInfo.price)}
                            </span>
                            {autoInfo.price2 && (
                                <span className={styles.extraPrice}>
                                    {"от " + formateDigitsString(autoInfo.price2) + " ₽"}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <FigureBlock className={styles.makeOrderButton}>
                    <span>ЗАКАЗАТЬ ПОД КЛЮЧ</span>
                    <Button onClick={() => setModal(true)} />
                </FigureBlock>
                {!isTablet && (
                    <div className={styles.getConsultant}>
                        <span>Консультация специалиста</span>
                        <SocialLink />
                    </div>
                )}
            </div>
            <ModalWindow visible={modal} setVisible={setModal}>
                <ApplicationForm close={setModal} />
            </ModalWindow>
        </div>
    );
};

export default CatalogSlider;
