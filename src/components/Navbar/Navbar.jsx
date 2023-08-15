import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from './Navbar.module.scss';

import useElementVisible from '../../hooks/useElementVisible';

const Navbar = () => {

    const navigate = useNavigate();

    const currentPath = '/';
    const idArray = ['carOrder', 'clientReviews', 'faq', 'team', 'aboutUs'];
    const activeAnchor = useElementVisible(currentPath, idArray);

    return (
        <nav className={styles.navigatoin}>
            <NavLink
                to='/catalog'
                className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
                Каталог
            </NavLink>
            <a href='#carOrder' className={activeAnchor === 'carOrder' ? styles.activeLink : styles.link}>Заказ авто</a>
            <a href='#clientReviews' onClick={() => navigate('/')} className={activeAnchor === 'clientReviews' ? styles.activeLink : styles.link}>Отзывы</a>
            <a href='#faq' onClick={() => navigate('/')} className={activeAnchor === 'faq' ? styles.activeLink : styles.link}>FAQ</a>
            <a href='#team' onClick={() => navigate('/')} className={activeAnchor === 'team' ? styles.activeLink : styles.link}>Команда</a>
            <a href='#aboutUs' onClick={() => navigate('/')} className={activeAnchor === 'aboutUs' ? styles.activeLink : styles.link}>О нас</a>
            <NavLink
                to='/premium_car'
                className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
                Премиум авто
            </NavLink>
        </nav>
    )
}

export default Navbar;