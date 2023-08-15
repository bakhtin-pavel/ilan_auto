import React, { useRef, useState, useEffect } from 'react';

import styles from './Dropdown.module.scss';

const Dropdown = ({ children, name }) => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const parentRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClick = (e) => {
            if (!menuRef) return;
            if (!menuRef.current.contains(e.target) && !parentRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)

    }, [isOpen])

    return (
        <div className={styles.dropdown}>
            <button ref={parentRef} onClick={() => setIsOpen(!isOpen)}>{name}</button>
            <div
                ref={menuRef}
                className={isOpen ? styles.visible : styles.noVisible}
            >
                {children}
            </div>
        </div>
    )
}

export default Dropdown;