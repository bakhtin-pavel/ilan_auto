import React from 'react';
import styles from './ApplicationInput.module.scss';

const ApplicationInput = (props) => {
    return (
        <input className={styles.input} {...props} />
    )
}

export default ApplicationInput;