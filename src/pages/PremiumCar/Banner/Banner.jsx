import React from 'react';
import styles from './Banner.module.scss';

// import premiumCar from '../../../assets/img/premium_car.jpg';

import { useWindowSize } from "../../../hooks/useWindowSize";

import { AccelerationIcon, PowerIcon, PremiumCarMark, SpeedIcon, VolumeIcon } from '../../../assets/icons';

const Banner = ({ photo, mark, model, slogan, speed, power, volume, acceleration }) => {

    const { innerWidth } = useWindowSize();

    return (
        <section className={styles.container}>
            <img src={photo} alt="" className={styles.bannerImg} />
            <div className={styles.caption}>
                {/* <PremiumCarMark /> */}
                <div>
                    {mark && <p className={styles.marka}>{mark}</p>}
                    {model && <p className={styles.model}>{model}</p>}
                    {slogan && <p className={styles.slogan}>{slogan}</p>}
                </div>
            </div>
            <div className={styles.characteristics}>
                {speed &&
                    <div>
                        <div>
                            <SpeedIcon />
                            {innerWidth > 767 &&
                                <p>Предельная скорость</p>
                            }
                        </div>
                        <p><span>{speed}</span> км/ч</p>
                    </div>
                }
                {power &&
                    <div>
                        <div>
                            <PowerIcon />
                            {innerWidth > 767 &&
                                <p>Мощность двигателя</p>
                            }
                        </div>
                        <p><span>{power}</span> л.с.</p>
                    </div>
                }
                {volume &&
                    <div>
                        <div>
                            <VolumeIcon />
                            {innerWidth > 767 &&
                                <p>Объем двигателя</p>
                            }
                        </div>
                        <p><span>{volume.slice(0, -3)}</span> см³</p>
                    </div>
                }
                {acceleration &&
                    <div>
                        <div>
                            <AccelerationIcon />
                            {innerWidth > 767 &&
                                <p>Разгон до 100 км/ч</p>
                            }
                        </div>
                        <p><span>{acceleration.slice(0, -1)}</span> сек.</p>
                    </div>
                }
            </div>
        </section>
    )
}

export default Banner;