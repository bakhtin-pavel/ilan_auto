import React from "react";

import styles from "./CatalogItem.module.scss";
import { classnames, formateDigitsString } from "../../utils";

const CatalogItem = ({ model, mark, image, oldPrice, extraPrice, onClick, isActive }) => {
    return (
        <div className={styles.item} onClick={onClick}>
            <div className={styles.title}>
                <p className={styles.model}>{model}</p>
                <p className={styles.mark}>{mark}</p>
            </div>
            <div className={styles.imageWrapper}>
                <img className={styles.fakeItemImage} src={image} alt="" />

                <img
                    className={classnames([
                        styles.itemImage,
                        [styles.active, isActive], // Вместо boolean поставить условие активности карточки
                    ])}
                    src={image}
                    alt=""
                />
            </div>
            <div className={styles.price}>
                <span className={styles.priceName}>цена без доставки</span>
                <div className={styles.priceBlock}>
                    <span
                        className={classnames([
                            styles.priceValue,
                            [styles.hasExtraPrice, extraPrice],
                        ])}
                    >
                        {formateDigitsString(oldPrice) + (extraPrice ? "" : " ₽")}
                    </span>
                    {extraPrice && (
                        <span className={styles.extraPrice}>
                            {formateDigitsString(extraPrice) + " ₽"}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CatalogItem;
