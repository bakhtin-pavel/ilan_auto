import React from 'react';
import styles from './Auctions.module.scss';

import { HeaderOnHomepage } from '../../../components';
import { AuctionLeft } from '../../../assets/icons';
import auctionRight from '../../../assets/icons/auctionRight.png';

const Auctions = () => {
    return (
        <section className={styles.container}>
            <HeaderOnHomepage>аукционы с японии</HeaderOnHomepage>
            <div className={styles.linksWrapper}>
                <div className={styles.linkBlock}>
                    <a href="http://auc.hotcar.online" target='_blank' rel="noreferrer">auc.hotcar.online</a>
                    <AuctionLeft />
                </div>
                <div className={styles.decor}></div>
                <div className={styles.linkBlock}>
                    <a href="https://jpstar.ru/avto-iz-japonii" target='_blank' rel="noreferrer">jpstar.ru/avto-iz-japonii</a>
                    <img src={auctionRight} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Auctions;