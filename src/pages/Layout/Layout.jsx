import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';

const Layout = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [pathname])

    return (
        <>
            <Header />
            <Outlet />
            <div>Footer</div>
        </>
    )
}

export default Layout