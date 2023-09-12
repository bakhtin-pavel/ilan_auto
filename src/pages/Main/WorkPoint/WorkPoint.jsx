import React, { useRef, useEffect, useState } from 'react';
import styles from './WorkPoint.module.scss';

import { HeaderOnHomepage } from '../../../components';

const WorkPoint = () => {

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [isVisible4, setIsVisible4] = useState(false);
    const [isVisible5, setIsVisible5] = useState(false);
    // const [isVisible, setIsVisible] = useState([false, false, false, false, false]);
    const decor1Ref = useRef(null);
    const decor2Ref = useRef(null);
    const decor3Ref = useRef(null);
    const decor4Ref = useRef(null);
    const decor5Ref = useRef(null);

    // const arrRef = [decor1Ref, decor2Ref, decor3Ref, decor4Ref, decor5Ref]

    const handleScroll = () => {

        // arrRef.forEach((refItem, index) => {
        //     if (refItem.current) {
        //         const { top } = refItem.current.getBoundingClientRect();
        //         if (top < window.innerHeight && !isVisible[index]) {
        //             setIsVisible();
        //         }
        //     }
        // })
        if (decor1Ref.current) {
            const position1 = decor1Ref.current.getBoundingClientRect();
            if (position1.top < window.innerHeight && !isVisible1) {
                setIsVisible1(true);
            }
        }
        if (decor2Ref.current) {
            const position2 = decor2Ref.current.getBoundingClientRect();
            if (position2.top < window.innerHeight && !isVisible2) {
                setIsVisible2(true);
            }
        }
        if (decor3Ref.current) {
            const position3 = decor3Ref.current.getBoundingClientRect();
            if (position3.top < window.innerHeight && !isVisible3) {
                setIsVisible3(true);
            }
        }
        if (decor4Ref.current) {
            const position4 = decor4Ref.current.getBoundingClientRect();
            if (position4.top < window.innerHeight && !isVisible4) {
                setIsVisible4(true);
            }
        }
        if (decor5Ref.current) {
            const position5 = decor5Ref.current.getBoundingClientRect();
            if (position5.top < window.innerHeight && !isVisible5) {
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
            <HeaderOnHomepage>Этапы работы</HeaderOnHomepage>
            <div className={styles.fon}>
                <div className={styles.wrapper}>
                    <div ref={decor1Ref} className={[styles.block, styles.point1, isVisible1 ? styles.anim : null].join(' ')}>
                        <p>1</p>
                        <div>
                            <p>Заявка</p>
                            <p>Вы оставляете заявку или связываетесь с нами удобным для вас способом «связаться сейчас»</p>
                        </div>
                    </div>
                    <div ref={decor2Ref} className={[styles.block, styles.point2, isVisible2 ? styles.anim : null].join(' ')}>
                        <p>2</p>
                        <div>
                            <p>Консультация</p>
                            <p>Дождитесь в течении 30 минут звонка нашего менеджера. Менеджер ответит на ваши вопросы.</p>
                        </div>
                    </div>
                    <div ref={decor3Ref} className={[styles.block, styles.point3, isVisible3 ? styles.anim : null].join(' ')}>
                        <p>3</p>
                        <div>
                            <p>Договор</p>
                            <p>Заключаете договор с нашей компанией. Менеджер предлагает вам подходящие варианты, Вы принимаете решение, автомобиль выкупается!</p>
                        </div>
                    </div>
                    <div ref={decor4Ref} className={[styles.block, styles.point4, isVisible4 ? styles.anim : null].join(' ')}>
                        <p>4</p>
                        <div>
                            <p>Доставка и таможня в РФ</p>
                            <p> Дожидаетесь счет Инвойс (счет) и оплачиваете его.</p>
                        </div>
                    </div>
                    <div ref={decor5Ref} className={[styles.block, styles.point5, isVisible5 ? styles.anim : null].join(' ')}>
                        <p>5</p>
                        <div>
                            <p>Забираете свое авто</p>
                            <p>Автомобиль приходит в таможенный блок и проходит все необходимые процедуры для всей юридической чистоты авто. После этого вы забираете свой автомобиль или мы отправляем его к вам в город на автовозе.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WorkPoint;