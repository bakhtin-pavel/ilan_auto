import React from 'react';
import styles from './Promotion.module.scss';

import { TimerIcon } from '../../assets/icons';

import Button from '../Button/Button';

const Promotion = ({ timer, orderClickButton, isMobileVideo }) => {
    return (
        <div className={isMobileVideo ? styles.containerMobile : styles.container}>
            <div className={styles.carOnWay}>машина в пути</div>
            <div className={styles.timerContainer}>
                <div className={styles.timerCaption}>
                    <TimerIcon />
                    <p>до окончания акции:</p>
                </div>
                <div className={styles.timer}><p>{timer}</p></div>
            </div>
            <div className={styles.specPrice}>
                <p>получить спеццену</p>
                <div>
                    <Button onClick={() => orderClickButton(true)} />
                </div>
            </div>
        </div>
    )
}

export default Promotion;