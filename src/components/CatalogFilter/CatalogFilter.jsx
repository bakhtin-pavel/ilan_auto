import React, { useState } from "react";
import FigureBlock from "../FigureBlock/FigureBlock";

import styles from "./CatalogFilter.module.scss";
import { ArrowLeftIcon } from "../../assets/icons";
import { classnames, formateDigitsString } from "../../utils";
import { useWindowSize } from "../../hooks/useWindowSize";

const CatalogFilter = () => {
  const years = ["2020", "2021", "2022"];
  const countries = ["Корея", "Япония", "Китай", "ОАЭ"];

  const [activeYears, setActiveYears] = useState([]);
  const [activeCountries, setActiveCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState({ from: "", to: "" });

  const handleYearClick = (year) => {
    if (!activeYears.includes(year)) {
      setActiveYears((prev) => [...prev, year]);
      return;
    }

    setActiveYears((prev) => prev.filter((item) => item !== year));
  };

  const handleCountryClick = (country) => {
    if (!activeCountries.includes(country)) {
      setActiveCountries((prev) => [...prev, country]);
      return;
    }

    setActiveCountries((prev) => prev.filter((item) => item !== country));
  };

  const handlePriceInputChange = (e) => {
    const value = e.target.value;
    const valueWithoutSpaceSymbol = value.split(/\s/).join("");

    const isNimber = !isNaN(valueWithoutSpaceSymbol);
    const isOverMaxLength = valueWithoutSpaceSymbol.length > 9;

    if (!isNimber) return;
    if (isOverMaxLength) return;

    const name = e.target.name;

    setPriceFilter((prev) => ({
      ...prev,
      [name]: formateDigitsString(valueWithoutSpaceSymbol),
    }));
  };

  const handleSearchChange = (e) => setSearch(e.target.value);

  const { innerWidth } = useWindowSize();

  const isMobile = innerWidth < 1200;

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
        <div className={styles.yearsWrapper}>
          <ArrowLeftIcon className={styles.arrow} />
          {years.map((item, index) => (
            <FigureBlock
              key={index}
              onClick={() => handleYearClick(item)}
              className={classnames([
                styles.yearsText,
                [styles.active, activeYears.includes(item)],
              ])}
            >
              <span>{item}</span>
            </FigureBlock>
          ))}

          <ArrowLeftIcon
            className={classnames([styles.arrow, styles.arrowNext])}
          />
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
            <span>Найти</span>
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
        <div className={styles.yearsWrapper}>
          {countries.map((item, index) => (
            <FigureBlock
              key={index}
              onClick={() => handleCountryClick(item)}
              className={classnames([
                styles.yearsText,
                [styles.active, activeCountries.includes(item)],
              ])}
            >
              <span>{item}</span>
            </FigureBlock>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogFilter;
