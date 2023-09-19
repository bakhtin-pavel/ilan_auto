import React, { useState, useEffect } from 'react';
import styles from './About.module.scss';

import axios from 'axios';

import { HeaderOnHomepage, Logo } from '../../../components';

import about_car from '../../../assets/img/about_car.png';
import { AboutTelegramIcon } from '../../../assets/icons';

const About = () => {

    const [contacts, setContacts] = useState(null);

    async function fetchContacts() {
        // const response = await axios.get('http://194.67.121.62:8005/v1/contacts');
        const response = await axios.get('https://api.ilanavto.ru/v1/contacts');
        setContacts(response.data.data);
    }

    useEffect(() => {
        fetchContacts()
    }, [])

    return (
        <section id='aboutUs' className={styles.container}>
            <HeaderOnHomepage>о нас</HeaderOnHomepage>
            <div className={styles.wrapper}>
                <p>В нашем Телеграмм канале мы рассказываем о новинках и информируем</p>
                <div className={styles.telegramPreview}>
                    <Logo styles={styles.logo} />
                    <img src={about_car} alt="" />
                    <span>Илан авто</span>
                    <p>Автомобили под заказ из Кореи, Китая и Японии</p>
                    <a href={contacts && contacts[4].value} target='_blank' rel="noreferrer" className={styles.button}>
                        <button>
                            <AboutTelegramIcon />
                            <p>ПРИСОЕДИНИТЬСЯ</p>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;