import React, { useEffect, useState } from 'react';
import styles from './ApplicationForm.module.scss';

import axios from 'axios';

import ApplicationInput from '../ApplicationInput/ApplicationInput';
import { Whatsapp, Telegram } from '../../assets/icons';
import OrderButton from '../OrderButton';
import politic_doc from '../../assets/documents/politic.pdf';

const ApplicationForm = ({ close, modal }) => {

    const [application, setApplication] = useState({ name: '', phone: '', whatsapp: false, telegram: false });
    const [errorCheck, setErrorCheck] = useState('');
    const [isPhoneValid, setPhoneValid] = useState(true);

    useEffect(() => {
        if (!modal) {
            setApplication({ ...application, name: '', phone: '', whatsapp: false, telegram: false });
        }
    }, [modal])

    useEffect(() => {
        if (!application.phone) {
            setErrorCheck('')
        }
    }, [application.phone])

    async function submitApplication(e) {
        e.preventDefault();

        isPhoneValid
            ? // await axios.post('http://194.67.121.62:8005/v1/feedback', {
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
                })
            : setErrorCheck('Некорректный номер телефона')


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
                        placeholder='Имя'
                    />
                </div>
                <div className={styles.formBlock}>
                    <p>Телефон</p>
                    <ApplicationInput
                        value={application.phone}
                        onChange={e => {
                            const phoneValue = e.target.value;
                            const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

                            setPhoneValid(phoneRegex.test(phoneValue));
                            setApplication({ ...application, phone: phoneValue });
                        }}
                        type='tel'
                        pattern='^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$'
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