import React, { useRef, useEffect } from 'react';
import styles from './ModalWindow.module.scss';

import { CloseIcon } from '../../assets/icons';

const ModalWindow = ({ children, visible, setVisible }) => {

    const contentRef = useRef(null);

    useEffect(() => {
        if (!visible) return;

        const handleClick = (e) => {
            if (!contentRef) return;
            if (!contentRef.current.contains(e.target)) {
                setVisible(false)
            }
        }

        document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)

    }, [visible, setVisible])

    return (
        <div className={visible ? styles.modalActive : styles.modal}>
            <div ref={contentRef} className={styles.modalContentWrapper}>
                <CloseIcon className={styles.closeButton} onClick={() => setVisible(false)} />
                {children}
            </div>
        </div>
    )
}

export default ModalWindow;