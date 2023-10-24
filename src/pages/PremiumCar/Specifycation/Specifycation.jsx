import React from 'react';
import styles from './Specifycation.module.scss';

import { AccelerationIcon, PowerIcon, SpeedIcon, VolumeIcon } from '../../../assets/icons';

const Specifycation = ({ year, bodyType, engineType, autoDrive, transmission, mileage, speed, power, volume, acceleration }) => {

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
                        <p>{year}</p>
                    </div>
                    <div>
                        <span>тип кузова</span>
                        <p>{bodyType}</p>
                    </div>
                    <div>
                        <span>тип двигателя</span>
                        <p>{engineType}</p>
                    </div>
                    <div>
                        <span>привод</span>
                        <p>{autoDrive}</p>
                    </div>
                    <div>
                        <span>коробка предач</span>
                        <p>{transmission}</p>
                    </div>
                    <div>
                        <span>пробег</span>
                        <p>{mileage} км</p>
                    </div>
                </div>
                <div className={styles.botSpec}>
                    <div>
                        <SpeedIcon />
                        <span>Предельная скорость</span>
                        <div className={styles.figureSpec}>
                            <div style={{ width: calculateProgressLineWidth(0, speed, 400) + "%" }}></div>
                        </div>
                        <p><span>{speed}&nbsp;</span>км/ч</p>
                    </div>
                    <div>
                        <PowerIcon />
                        <span>Мощность двигателя</span>
                        <div className={styles.figureSpec}>
                            <div style={{ width: calculateProgressLineWidth(0, power, 800) + "%" }}></div>
                        </div>
                        <p><span>{power}&nbsp;</span>л.с.</p>
                    </div>
                    <div>
                        <VolumeIcon />
                        <span>Объем двигателя</span>
                        <div className={styles.figureSpec}>
                            <div style={{ width: calculateProgressLineWidth(0, parseFloat(volume.slice(0, -3)), 6000) + "%" }}></div>
                        </div>
                        <p><span>{volume.slice(0, -3)}&nbsp;</span>см³</p>
                    </div>
                    <div>
                        <AccelerationIcon />
                        <span>Разгон до 100 км/ч</span>
                        <div className={styles.figureSpec}>
                            <div style={{ width: calculateProgressLineWidth(0, parseFloat(acceleration.slice(0, -1)), 7) + "%" }}></div>
                        </div>
                        <p><span>{acceleration.slice(0, -1)}&nbsp;</span>сек.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specifycation;