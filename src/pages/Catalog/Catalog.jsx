import React, { useState, useEffect, useRef } from "react";
import styles from "./Catalog.module.scss";

import axios from 'axios';

import { CatalogFilter, CatalogItem } from "../../components";
import { CatalogSlider } from "../../components/CatalogSlider";
import { DATA, DATA_LIST } from "../../components/CatalogSlider/data";

import { Pagination } from "antd";
import { useWindowSize } from "../../hooks/useWindowSize";
import MobileCatalogItem from "../../components/MobileCatalogItem/MobileCatalogItem";

import { useSelector, useDispatch } from 'react-redux';
import { changePages } from "../../store/filters/filterSlice";

const Catalog = () => {

    const filterSearch = useSelector((state) => state.filter.search);
    const filterCountry = useSelector((state) => state.filter.country);
    const filterYears = useSelector((state) => state.filter.year);
    const filterFrom = useSelector((state) => state.filter.from);
    const filterTo = useSelector((state) => state.filter.to);
    const page = useSelector((state) => state.filter.page);
    const dispatch = useDispatch();

    const [autoItems, setAutoItems] = useState([]);
    const [activeAuto, setActiveAuto] = useState(0);
    const [pageCount, setPageCount] = useState(1);
    const topRef = useRef(null);

    async function fetchAuto() {
        const response = await axios.get('http://194.67.121.62:8005/v1/auto', {
            params: {
                search: filterSearch,
                country: filterCountry,
                year: filterYears,
                priceFrom: filterFrom,
                priceTo: filterTo,
                limit: 6,
                page: page,
            }
        });
        setAutoItems(response.data.data);
        setPageCount(response.data.pagination.totalCount)
        console.log(response);
    }

    useEffect(() => {
        fetchAuto()
        setActiveAuto(0)
    }, [filterSearch, filterCountry, filterYears, filterFrom, filterTo, page])

    const handlePageChange = (page) => {
        dispatch(changePages(page));
        topRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const { innerWidth } = useWindowSize();
    const isMobile = innerWidth < 768;

    return (
        <>
            <div ref={topRef} className={styles.catalogWrapper}>
                <div className={styles.bg_blur} />
                <CatalogFilter />
                {autoItems.length && <CatalogSlider item={autoItems[activeAuto]} />}
            </div>
            {!isMobile && (
                <div className={styles.catalogListWrapper}>
                    {autoItems.length && autoItems.map((item, index) => (
                        <CatalogItem
                            key={item.id}
                            onClick={() => setActiveAuto(index)}
                            isActive={index === activeAuto ? true : false}
                            model={item.model}
                            mark={item.mark}
                            image={item.images[0]}
                            oldPrice={item.price}
                            extraPrice={item.price2}
                        />
                    ))}
                </div>
            )}

            {isMobile && (
                <div className={styles.catalogListWrapper}>
                    {autoItems && autoItems.map((item) => (
                        <MobileCatalogItem key={item.id} item={item} />
                    ))}
                </div>
            )}

            <div className={styles.paginationWrapper}>
                <Pagination
                    current={page}
                    total={pageCount}
                    pageSize={6}
                    className={styles.pagination}
                    onChange={handlePageChange}
                    showPrevNextJumpers={false}
                    showLessItems={false}
                    showQuickJumper={false}
                />
            </div>
        </>
    );
};

export default Catalog;
