import React, { useState } from 'react';
import styles from './ApplicationForm.module.scss';

import ApplicationInput from '../ApplicationInput/ApplicationInput';
import { Whatsapp, Telegram } from '../../assets/icons';
import OrderButton from '../OrderButton';
import politic_doc from '../../assets/documents/politic.pdf';

const ApplicationForm = () => {

    const [application, setApplication] = useState({ name: '', phone: '', whatsapp: false, telegram: false })

    const vremennoe = (e) => {
        e.preventDefault();

        setApplication({ ...application, name: '', phone: '', whatsapp: false, telegram: false })
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.formBlock}>
                    <p>ФИО</p>
                    <ApplicationInput
                        value={application.name}
                        onChange={e => setApplication({ ...application, name: e.target.value })}
                        type='text'
                        placeholder='Иванов Иван Иванович'
                    />
                </div>
                <div className={styles.formBlock}>
                    <p>Телефон</p>
                    <ApplicationInput
                        value={application.phone}
                        onChange={e => setApplication({ ...application, phone: e.target.value })}
                        type='tel'
                        placeholder='+7 (999) 999-99-99'
                    />
                </div>
                <div className={styles.formBlockMessendger}>
                    <p>Мессенджер для связи</p>
                    <div>
                        <input
                            type="checkbox"
                            checked={application.whatsapp}
                            onChange={() => setApplication({ ...application, whatsapp: !application.whatsapp })}
                        />
                        <Whatsapp className={styles.whatsapp} />
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={application.telegram}
                            onChange={() => setApplication({ ...application, telegram: !application.telegram })}
                        />
                        <Telegram className={styles.telegram} />
                    </div>
                </div>
                <OrderButton onClick={vremennoe}>
                    Отправить
                </OrderButton>
                <p className={styles.politic}>Нажимая кнопку Отправить, вы соглашаетесь с <a href={politic_doc} target='_blank' rel="noreferrer">Политикой обработки персональных данных</a></p>
            </form>
        </div>
    )
}

export default ApplicationForm;