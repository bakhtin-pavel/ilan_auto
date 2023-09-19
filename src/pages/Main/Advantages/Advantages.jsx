import React, { useRef, useEffect, useState } from 'react';
import styles from './Advantages.module.scss';

import { HeaderOnHomepage } from '../../../components';
import { Advantages1, Advantages2, Advantages3, Advantages4, Advantages5 } from '../../../assets/icons';

const Advantages = () => {

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    const decor1Ref = useRef(null);
    const decor2Ref = useRef(null);
    const decor3Ref = useRef(null);
    const decor4Ref = useRef(null);
    const decor5Ref = useRef(null);

    const handleScroll = () => {
        if (decor1Ref.current) {
            const position1 = decor1Ref.current.getBoundingClientRect();
            if (position1.top < (window.innerHeight - 70) && !isVisible1) {
                setIsVisible1(true);
            }
        }
        if (decor2Ref.current) {
            const position2 = decor2Ref.current.getBoundingClientRect();
            if (position2.top < (window.innerHeight - 70) && !isVisible2) {
                setIsVisible2(true);
            }
        }
        if (decor3Ref.current) {
            const position3 = decor3Ref.current.getBoundingClientRect();
            if (position3.top < (window.innerHeight - 70) && !isVisible3) {
                setIsVisible3(true);
            }
        }
        if (decor4Ref.current) {
            const position4 = decor4Ref.current.getBoundingClientRect();
            if (position4.top < (window.innerHeight - 70) && !isVisible4) {
                setIsVisible4(true);
            }
        }
        if (decor5Ref.current) {
            const position5 = decor5Ref.current.getBoundingClientRect();
            if (position5.top < (window.innerHeight - 70) && !isVisible5) {
                setIsVisible5(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={styles.container}>
            <HeaderOnHomepage>наши преимущества</HeaderOnHomepage>
            <div className={styles.wrapper}>
                <div ref={decor1Ref} className={[styles.block, isVisible1 ? styles.anim : null].join(' ')}>
                    <div className={styles.headBlock}>
                        <div className={styles.icon}>
                            <Advantages1 />
                        </div>
                        <p>Честный пробег</p>
                    </div>
                    <div className={styles.textBlock}>Настоящий километраж на одометре, так как в Японии и Южной Корее корректировка пробега является уголовным преступлением.</div>
                </div>
                <div ref={decor2Ref} className={[styles.block, isVisible2 ? styles.anim : null].join(' ')}>
                    <div className={styles.headBlock}>
                        <div className={styles.icon}>
                            <Advantages2 />
                        </div>
                        <p>Низкая стоимость</p>
                    </div>
                    <div className={styles.textBlock}>Автомобили из Японии, Южной Кореи и Китая всегда дешевле, чем авто со схожим состоянием на рынке России.</div>
                </div>
                <div ref={decor3Ref} className={[styles.block, isVisible3 ? styles.anim : null].join(' ')}>
                    <div className={styles.headBlock}>
                        <div className={styles.icon}>
                            <Advantages3 />
                        </div>
                        <p>Широкий выбор</p>
                    </div>
                    <div className={styles.textBlock}>Каждый день на аукционах продаются тысячи автомобилей, в Японии и Южной Корее гораздо шире выбор моделей, комплектаций, цветов.</div>
                </div>
                <div ref={decor4Ref} className={[styles.block, styles.four, isVisible4 ? styles.anim : null].join(' ')}>
                    <div className={styles.headBlock}>
                        <div className={styles.icon}>
                            <Advantages4 />
                        </div>
                        <p>Состояние автомобиля</p>
                    </div>
                    <div className={styles.textBlock}>В Южной Корее и Японии хорошие дороги, владельцы используют только качественные ГСМ для своих авто, вовремя проходят техническое обслуживание.</div>
                </div>
                <div ref={decor5Ref} className={[styles.block, styles.five, isVisible5 ? styles.anim : null].join(' ')}>
                    <div className={styles.headBlock}>
                        <div className={styles.icon}>
                            <Advantages5 />
                        </div>
                        <p>Юридическая чистота</p>
                    </div>
                    <div className={styles.textBlock}>В комплекте с машиной будет полный набор документов об уплате таможеннных платежей и утилизационного сбора. Вы будете первым собственником в ПТС.</div>
                </div>
            </div>
        </section>
    )
}

export default Advantages;