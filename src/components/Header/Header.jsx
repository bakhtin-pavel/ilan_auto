import React, { useState } from 'react';

import styles from './Header.module.scss';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import SocialLink from '../SocialLink/SocialLink';
import { useWindowSize } from '../../hooks/useWindowSize';

const Header = () => {

    const size = useWindowSize();

    const [menuOpen, setMenuOpen] = useState(false);
    const closeMobileMenu = () => {
        setMenuOpen(false)
    }

    return (
        <>
            <div className={styles.container}>
                <Logo styles={styles.logo} mobleMenuClose={closeMobileMenu} />
                {size.innerWidth > 1024
                    ? <>
                        <Navbar />
                        <SocialLink />
                    </>
                    : <button
                        className={menuOpen ? styles.menuButtonClose : styles.menuButton}
                        onClick={() => setMenuOpen(!menuOpen)}
                    ></button>
                }
            </div>
            <div className={menuOpen ? styles.mobileMenuOpen : styles.mobileMenu}>
                <Navbar />
            </div>
        </>
    )
}

export default Header;