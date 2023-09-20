import React from 'react';
import styles from './Specifycation.module.scss';

import { AccelerationIcon, PowerIcon, SpeedIcon, VolumeIcon } from '../../../assets/icons';

const Specifycation = () => {

    const calculateProgressLineWidth = (start, current, total) => {
        return ((current - start) / (total - start)) * 100;
    };

    return (
        <section id='specify' className={styles.container}>
            <h2>Характеристики</h2>
            <div>
                <div className={styles.topSpec}>
                    <div>
                        <span>год выпуска</span>
                        <p>2022</p>
                    </div>
                    <div>
                        <span>тип кузова</span>
                        <p>седан</p>
                    </div>
                    <div>
                        <span>тип двигателя</span>
                        <p>бензин</p>
                    </div>
                    <div>
                        <span>привод</span>
                        <p>передний</p>
                    </div>
                    <div>
                        <span>коробка предач</span>
                        <p>автомат</p>
                    </div>
                    <div>
                        <span>пробег</span>
                        <p>12 км</p>
                    </div>
                </div>
                <div className={styles.botSpec}>
                    <div>
                        <SpeedIcon />
                        <span>Предельная скорость</span>
                        <div className={styles.figureSpec}>
                            <div style={{ width: calculateProgressLineWidth(90, 250, 350) + "%" }}></div>
                        </div>
                        <p><span>250&nbsp;</span>км/ч</p>
                    </div>
                    <div>
                        <PowerIcon />
                        <span>Мощность двигателя</span>
                        <div className={styles.figureSpec}>
                            <div style={{ width: calculateProgressLineWidth(50, 460, 800) + "%" }}></div>
                        </div>
                        <p><span>460&nbsp;</span>л.с.</p>
                    </div>
                    <div>
                        <VolumeIcon />
                        <span>Объем двигателя</span>
                        <div className={styles.figureSpec}>
                            <div style={{ width: calculateProgressLineWidth(50, 1480, 2000) + "%" }}></div>
                        </div>
                        <p><span>1480&nbsp;</span>см³</p>
                    </div>
                    <div>
                        <AccelerationIcon />
                        <span>Разгон до 100 км/ч</span>
                        <div className={styles.figureSpec}>
                            <div style={{ width: calculateProgressLineWidth(2, 3.3, 10) + "%" }}></div>
                        </div>
                        <p><span>3,3&nbsp;</span>сек.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specifycation;