import React, { useState } from 'react';
import styles from './ApplicationForm.module.scss';

import axios from 'axios';

import ApplicationInput from '../ApplicationInput/ApplicationInput';
import { Whatsapp, Telegram } from '../../assets/icons';
import OrderButton from '../OrderButton';
import politic_doc from '../../assets/documents/politic.pdf';

const ApplicationForm = ({ close }) => {

    const [application, setApplication] = useState({ name: '', phone: '', whatsapp: false, telegram: false });
    const [errorCheck, setErrorCheck] = useState('');

    async function submitApplication(e) {
        e.preventDefault();

        // await axios.post('http://194.67.121.62:8005/v1/feedback', {
        await axios.post('https://api.ilanavto.ru/v1/feedback', {
            phone: application.phone,
            username: application.name,
            telegram: application.telegram,
            whatsapp: application.whatsapp,
        })
            .then(function (response) {
                console.log(response);
                setErrorCheck('')
                setApplication({ ...application, name: '', phone: '', whatsapp: false, telegram: false });
                close(false);
            })
            .catch(function (error) {
                console.log(error);
                setErrorCheck(error.response.data.data.message.slice(0, -1))
            });
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
                {errorCheck && <p className={styles.errorText}>{errorCheck}!</p>}
                <OrderButton onClick={submitApplication}>
                    Отправить
                </OrderButton>
                <p className={styles.politic}>Нажимая кнопку Отправить, вы соглашаетесь с <a href={politic_doc} target='_blank' rel="noreferrer">Политикой обработки персональных данных</a></p>
            </form>
        </div>
    )
}

export default ApplicationForm;