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
                            <div style={{ width: calculateProgressLineWidth(0, 250, 400) + "%" }}></div>
                        </div>
                        <p><span>250</span>&nbsp;км/ч</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specifycation;