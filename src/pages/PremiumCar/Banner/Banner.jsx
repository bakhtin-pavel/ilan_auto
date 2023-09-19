import React from 'react';
import styles from './Banner.module.scss';

import premiumCar from '../../../assets/img/premium_car.jfif';

import { useWindowSize } from "../../../hooks/useWindowSize";

import { AccelerationIcon, PowerIcon, PremiumCarMark, SpeedIcon, VolumeIcon } from '../../../assets/icons';

const Banner = () => {

    const { innerWidth } = useWindowSize();

    return (
        <section className={styles.container}>
            <img src={premiumCar} alt="" className={styles.bannerImg} />
            <div className={styles.caption}>
                <PremiumCarMark />
                <div>
                    <p className={styles.marka}>BMW</p>
                    <p className={styles.model}>M5 Competition</p>
                    <p className={styles.slogan}>Два мира — один автомобиль.</p>
                </div>
            </div>
            <div className={styles.characteristics}>
                <div>
                    <div>
                        <SpeedIcon />
                        {innerWidth > 767 &&
                            <p>Предельная скорость</p>
                        }
                    </div>
                    <p><span>250</span> км/ч</p>
                </div>
                <div>
                    <div>
                        <PowerIcon />
                        {innerWidth > 767 &&
                            <p>Мощность двигателя</p>
                        }
                    </div>
                    <p><span>460</span> л.с.</p>
                </div>
                <div>
                    <div>
                        <VolumeIcon />
                        {innerWidth > 767 &&
                            <p>Объем двигателя</p>
                        }
                    </div>
                    <p><span>1480</span> см³</p>
                </div>
                <div>
                    <div>
                        <AccelerationIcon />
                        {innerWidth > 767 &&
                            <p>Разгон до 100 км/ч</p>
                        }
                    </div>
                    <p><span>3,3</span> сек.</p>
                </div>
            </div>
        </section>
    )
}

export default Banner;