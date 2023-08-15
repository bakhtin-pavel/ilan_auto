import React from 'react';

import styles from './SocialLink.module.scss';

import { Telegram, VK, Whatsapp } from '../../assets/icons';

const SocialLink = () => {
    return (
        <div
            className={styles.container}
        >
            <a href="#s" target='_blank' rel="noreferrer">
                <Whatsapp
                    className={styles.whatsapp}
                />
            </a>
            <a href="#s" target='_blank' rel="noreferrer">
                <Telegram
                    className={styles.telegram}
                />
            </a>
            <a href="#s" target='_blank' rel="noreferrer">
                <VK
                    className={styles.vk}
                />
            </a>
        </div>
    )
}

export default SocialLink