import React from "react";

import styles from "./MobileCatalogItem.module.scss";
import { DATA_LIST } from "../CatalogSlider/data";
import Slider from "react-slick";
import { CatalogSlider } from "../CatalogSlider";

const MobileCatalogItem = ({ item }) => {
  const data = DATA_LIST[0];

  return (
    <div className={styles.mobileItem}>
      <CatalogSlider item={item} />
    </div>
  );
};

export default MobileCatalogItem;
