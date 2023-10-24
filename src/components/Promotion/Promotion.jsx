import React, { useState, useEffect } from 'react';
import styles from './Promotion.module.scss';

import { TimerIcon } from '../../assets/icons';

import Button from '../Button/Button';

const Promotion = ({ timerDate, orderClickButton }) => {

    const [timeLeft, setTimeLeft] = useState('00:00:00:00');

    useEffect(() => {

        if (timerDate) {
            const now = new Date().getTime();
            const distance = timerDate.getTime() - now;

            const days = Math.floor(distance / (86400000));
            const hours = Math.floor((distance % (86400000)) / (3600000));
            const minutes = Math.floor((distance % (3600000)) / (60000));
            const seconds = Math.floor((distance % (60000)) / 1000);

            setTimeLeft(`${days > 9 ? days : `0${days}`}:${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`);

            if (distance < 0) {
                setTimeLeft('00:00:00:00');
            }
        }

        const timer = setInterval(() => {
            if (timerDate) {
                const now = new Date().getTime();
                const distance = timerDate.getTime() - now;

                const days = Math.floor(distance / (86400000));
                const hours = Math.floor((distance % (86400000)) / (3600000));
                const minutes = Math.floor((distance % (3600000)) / (60000));
                const seconds = Math.floor((distance % (60000)) / 1000);

                setTimeLeft(`${days > 9 ? days : `0${days}`}:${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`);

                if (distance < 0) {
                    if (timer) {
                        clearInterval(timer);
                    }
                    setTimeLeft('00:00:00:00');
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timerDate]);

    return (
        <div className={styles.container}>
            <div className={styles.carOnWay}>машина в пути</div>
            <div className={styles.timerContainer}>
                <div className={styles.timerCaption}>
                    <TimerIcon />
                    <p>до окончания акции:</p>
                </div>
                <div className={styles.timer}><p>{timeLeft}</p></div>
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