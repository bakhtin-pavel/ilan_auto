import React, { useState, useEffect } from 'react';
import styles from './SocialLink.module.scss';

import axios from 'axios';

import { Telegram, VK, Whatsapp } from '../../assets/icons';

const SocialLink = () => {

    const [contacts, setContacts] = useState(null);

    async function fetchContacts() {
        const response = await axios.get('http://194.67.121.62:8005/v1/contacts');
        setContacts(response.data.data);
    }

    useEffect(() => {
        fetchContacts()
    }, [])

    return (
        <div
            className={styles.container}
        >
            <a href={contacts && contacts[5].value} target='_blank' rel="noreferrer">
                <Whatsapp
                    className={styles.whatsapp}
                />
            </a>
            <a href={contacts && contacts[4].value} target='_blank' rel="noreferrer">
                <Telegram
                    className={styles.telegram}
                />
            </a>
            <a href={contacts && contacts[3].value} target='_blank' rel="noreferrer">
                <VK
                    className={styles.vk}
                />
            </a>
        </div>
    )
}

export default SocialLink