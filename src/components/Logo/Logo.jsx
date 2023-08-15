import React from 'react';
import { Link } from 'react-router-dom';
import { LogoImg } from '../../assets/icons';

const Logo = ({ styles }) => {
    return (
        <Link to='/' onClick={() => document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })}>
            <LogoImg className={styles} />
        </Link>
    )
}

export default Logo;