import React from 'react';
import styles from './WorkPoint.module.scss';
import { HeaderOnHomepage } from '../../../components';

const WorkPoint = () => {
    return (
        <section className={styles.container}>
            <HeaderOnHomepage>Этапы работы</HeaderOnHomepage>
            <div className={styles.fon}>
                <div className={styles.wrapper}>
                    <div className={[styles.block, styles.point1].join(' ')}>
                        <p>1</p>
                        <div>
                            <p>Заявка</p>
                            <p>Вы оставляете заявку или связываетесь с нами удобным для вас способом «связаться сейчас»</p>
                        </div>
                    </div>
                    <div className={[styles.block, styles.point2].join(' ')}>
                        <p>2</p>
                        <div>
                            <p>Консультация</p>
                            <p>Дождитесь в течении 30 минут звонка нашего менеджера. Менеджер ответит на ваши вопросы.</p>
                        </div>
                    </div>
                    <div className={[styles.block, styles.point3].join(' ')}>
                        <p>3</p>
                        <div>
                            <p>Договор</p>
                            <p>Заключаете договор с нашей компанией. Менеджер предлагает вам подходящие варианты, Вы принимаете решение, автомобиль выкупается!</p>
                        </div>
                    </div>
                    <div className={[styles.block, styles.point4].join(' ')}>
                        <p>4</p>
                        <div>
                            <p>Доставка и таможня в РФ</p>
                            <p> Дожидаетесь счет Инвойс (счет) и оплачиваете его.</p>
                        </div>
                    </div>
                    <div className={[styles.block, styles.point5].join(' ')}>
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