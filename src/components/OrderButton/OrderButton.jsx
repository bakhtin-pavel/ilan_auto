import React from 'react';
import styles from './OrderButton.module.scss';


const OrderButton = ({ onClick, children }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="41" viewBox="0 0 32 40" fill="none">
                <path d="M25 34H17L24 20L17 6H25L32 20L25 34Z" fill="white" />
            </svg>
        </button>
    )
}

export default OrderButton;