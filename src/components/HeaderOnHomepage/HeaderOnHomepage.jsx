import React from 'react';
import styles from './HeaderOnHomepage.module.scss';

const HeaderOnHomepage = ({ children }) => {
    return (
        <div className={styles.header}>
            <div></div>
            <h2>{children}</h2>
        </div>
    )
}

export default HeaderOnHomepage;