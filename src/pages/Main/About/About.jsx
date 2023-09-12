import React from 'react';
import styles from './About.module.scss';

import { HeaderOnHomepage } from '../../../components';

import aboutImg from '../../../assets/img/about.png';

const About = () => {
    return (
        <section id='aboutUs' className={styles.container}>
            <HeaderOnHomepage>о нас</HeaderOnHomepage>
            <div className={styles.wrapper}>
                <p>В нашем Телеграмм канале мы рассказываем о новинках и информируем</p>
                <div>
                    <a href="#s" target='_blank' rel="noreferrer">
                        <img src={aboutImg} alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About;