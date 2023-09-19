import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import styles from './Navbar.module.scss';

import useElementVisible from '../../hooks/useElementVisible';

const Navbar = ({ mobleMenuClose }) => {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const currentPath = '/';
    const idArray = ['carOrder', 'clientReviews', 'faq', 'contacts'];
    const activeAnchor = useElementVisible(currentPath, idArray);

    const handleClickAnchor = (id, e) => {
        e.preventDefault();
        if (pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const anchorElement = document.getElementById(id);
                anchorElement.scrollIntoView({ behavior: 'smooth' });
            }, 800);
        } else {
            setTimeout(() => {
                const anchorElement = document.getElementById(id);
                anchorElement.scrollIntoView({ behavior: 'smooth' });
            }, 150);
        }
        mobleMenuClose();
    }

    return (
        <nav className={styles.navigatoin}>
            <NavLink
                to='/catalog'
                onClick={() => mobleMenuClose()}
                className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
                Машины в наличии
            </NavLink>
            <a href='#carOrder' onClick={(e) => handleClickAnchor('carOrder', e)} className={activeAnchor === 'carOrder' ? styles.activeLink : styles.link}>Заказ авто</a>
            <a href='#clientReviews' onClick={(e) => handleClickAnchor('clientReviews', e)} className={activeAnchor === 'clientReviews' ? styles.activeLink : styles.link}>Отзывы</a>
            <a href='#faq' onClick={(e) => handleClickAnchor('faq', e)} className={activeAnchor === 'faq' ? styles.activeLink : styles.link}>FAQ</a>
            {/* <a href='#team' onClick={(e) => handleClickAnchor('team', e)} className={activeAnchor === 'team' ? styles.activeLink : styles.link}>Команда</a> */}
            {/* <a href='#aboutUs' onClick={(e) => handleClickAnchor('aboutUs', e)} className={activeAnchor === 'aboutUs' ? styles.activeLink : styles.link}>О нас</a> */}
            <a href='#contacts' onClick={() => mobleMenuClose()} className={activeAnchor === 'contacts' ? styles.activeLink : styles.link}>Контакты</a>
            <NavLink
                to='/premium_car'
                onClick={() => mobleMenuClose()}
                className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
                Премиум авто
            </NavLink>
        </nav>
    )
}

export default Navbar;