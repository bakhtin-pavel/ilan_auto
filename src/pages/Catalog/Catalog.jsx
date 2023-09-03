import React from "react";
import { CatalogFilter, CatalogItem } from "../../components";

import styles from "./Catalog.module.scss";
import { CatalogSlider } from "../../components/CatalogSlider";
import { DATA, DATA_LIST } from "../../components/CatalogSlider/data";

import { Pagination } from "antd";
import { useWindowSize } from "../../hooks/useWindowSize";
import MobileCatalogItem from "../../components/MobileCatalogItem/MobileCatalogItem";

const Catalog = () => {
  const handlePageChange = (page) => {
    console.log(page);
  };

  const { innerWidth } = useWindowSize();

  const isMobile = innerWidth < 768;

  return (
    <>
      <div className={styles.catalogWrapper}>
        <div className={styles.bg_blur} />
        <CatalogFilter />
        <CatalogSlider item={DATA} />
      </div>
      {!isMobile && (
        <div className={styles.catalogListWrapper}>
          {DATA_LIST.map((item) => (
            <CatalogItem
              key={item.id}
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
          {DATA_LIST.map((item) => (
            <MobileCatalogItem key={item.id} item={item} />
          ))}
        </div>
      )}

      <div className={styles.paginationWrapper}>
        <Pagination
          current={1}
          total={50}
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
