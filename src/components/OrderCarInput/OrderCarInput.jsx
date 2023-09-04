import React from 'react';
import styles from './OrderCarInput.module.scss';

const OrderCarInput = (props) => {
    return (
        <input className={styles.input} {...props} />
    )
}

export default OrderCarInput;