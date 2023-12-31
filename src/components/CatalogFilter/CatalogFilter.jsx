import React, { useState, useEffect, useRef } from "react";
import FigureBlock from "../FigureBlock/FigureBlock";

import styles from "./CatalogFilter.module.scss";
import { ArrowLeftIcon } from "../../assets/icons";
import { classnames, formateDigitsString } from "../../utils";
import { useWindowSize } from "../../hooks/useWindowSize";

import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector, useDispatch } from "react-redux";
import {
    changeCountrys,
    changeFrom,
    changePages,
    changeSearch,
    changeTo,
    changeYears,
} from "../../store/filters/filterSlice";
import Slider from "react-slick";

const CatalogFilter = () => {
    const filterCountrys = useSelector((state) => state.filter.country);
    const filterYears = useSelector((state) => state.filter.year);
    const page = useSelector((state) => state.filter.page);
    const dispatch = useDispatch();

    const [itemsFilters, setItemsFilters] = useState(null);
    const [sliderWidth, setSliderWidth] = useState(100);

    async function fetchFilters() {
        // const response = await axios.get("http://194.67.121.62:8005/v1/auto/filters");
        const response = await axios.get("https://api.ilanavto.ru/v1/auto/filters");
        setItemsFilters(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchFilters();
    }, []);

    const [search, setSearch] = useState("");
    const [priceFilter, setPriceFilter] = useState({ from: "", to: "" });

    const handleYearClick = (year) => {
        dispatch(changeYears(year));
        if (page !== 1) {
            dispatch(changePages(1));
        }
    };

    const handleCountryClick = (country) => {
        dispatch(changeCountrys(country));
        if (page !== 1) {
            dispatch(changePages(1));
        }
    };

    const handlePriceInputChange = (e) => {
        const value = e.target.value;
        const valueWithoutSpaceSymbol = value.split(/\s/).join("");

        const isNimber = !isNaN(valueWithoutSpaceSymbol);
        const isOverMaxLength = valueWithoutSpaceSymbol.length > 9;

        if (!isNimber) return;
        if (isOverMaxLength) return;

        const name = e.target.name;
        const numberValue = Number(valueWithoutSpaceSymbol);
        if (name === "from") {
            dispatch(changeFrom(numberValue));
        } else {
            dispatch(changeTo(numberValue));
        }
        if (page !== 1) {
            dispatch(changePages(1));
        }

        setPriceFilter((prev) => ({
            ...prev,
            [name]: formateDigitsString(valueWithoutSpaceSymbol),
        }));
    };

    const handleSearchChange = (e) => setSearch(e.target.value);

    const handleSearchStart = () => {
        dispatch(changeSearch(search));
        if (page !== 1) {
            dispatch(changePages(1));
        }
    };

    const { innerWidth } = useWindowSize();

    const isMobile = innerWidth < 1200;

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <ArrowLeftIcon
                onClick={onClick}
                className={className}
                style={{ ...style, height: "100%", right: -32 }}
            />
        );
    }

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <ArrowLeftIcon
                onClick={onClick}
                className={className}
                style={{ ...style, height: "100%", right: -32 }}
            />
        );
    };

    console.log(isMobile);

    const sliderOption = {
        slidesToShow: isMobile ? 3 : 4,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const sliderWrapperRef = useRef(null);

    useEffect(() => {
        setSliderWidth(sliderWrapperRef.current.clientWidth);
    }, [sliderWrapperRef]);

    return (
        <div className={styles.filterWrap}>
            {isMobile && (
                <div className={styles.search}>
                    <FigureBlock className={styles.searchWrapper}>
                        <input
                            value={search}
                            onChange={handleSearchChange}
                            placeholder="Найти авто"
                        />
                    </FigureBlock>
                    <FigureBlock className={styles.searchButton}>
                        <span>Найти</span>
                    </FigureBlock>
                </div>
            )}
            <div className={styles.yearsFilter}>
                <p className={styles.filterTitle}>Год&nbsp;выпуска</p>
                <div className={styles.yearsWrapper} ref={sliderWrapperRef}>
                    {itemsFilters && (
                        <Slider {...sliderOption} style={{ width: sliderWidth - 16 }}>
                            {itemsFilters.years
                                .sort((a, b) => a - b)
                                .map((item, index) => (
                                    <FigureBlock
                                        key={index}
                                        onClick={() => handleYearClick(item)}
                                        className={classnames([
                                            styles.yearsText,
                                            [styles.active, filterYears.includes(item)],
                                        ])}
                                    >
                                        <span>{item}</span>
                                    </FigureBlock>
                                ))}
                        </Slider>
                    )}
                </div>
            </div>
            {!isMobile && (
                <div className={styles.search}>
                    <FigureBlock className={styles.searchWrapper}>
                        <input
                            value={search}
                            onChange={handleSearchChange}
                            placeholder="Найти авто"
                        />
                    </FigureBlock>
                    <FigureBlock className={styles.searchButton}>
                        <span onClick={handleSearchStart}>Найти</span>
                    </FigureBlock>
                </div>
            )}
            <div className={styles.budgetFilter}>
                <p className={styles.filterTitle}>Бюджет</p>
                <div className={styles.budgetWrapper}>
                    <span>от</span>
                    <FigureBlock className={styles.budgetInputWrapper}>
                        <input
                            value={priceFilter.from}
                            name="from"
                            onChange={handlePriceInputChange}
                        />
                    </FigureBlock>
                    <span>до</span>
                    <FigureBlock className={styles.budgetInputWrapper}>
                        <input
                            value={priceFilter.to}
                            name="to"
                            onChange={handlePriceInputChange}
                        />
                    </FigureBlock>
                </div>
            </div>
            <div className={styles.countryFilter}>
                <p className={styles.filterTitle}>Страна</p>
                <div className={styles.yearsWrapper} style={{ width: 'auto', flexWrap: 'wrap', gap: '10px 0px' }}>
                    {itemsFilters &&
                        Object.entries(itemsFilters.countries).map(
                            ([key, value], index) => (
                                <FigureBlock
                                    key={index}
                                    onClick={() => handleCountryClick(key)}
                                    className={classnames([
                                        styles.yearsText,
                                        [styles.active, filterCountrys.includes(key)],
                                    ])}
                                >
                                    <span>{value}</span>
                                </FigureBlock>
                            )
                        )}
                </div>
            </div>
        </div>
    );
};

export default CatalogFilter;
