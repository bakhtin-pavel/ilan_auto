import React, { useEffect, useState } from 'react';
import styles from './OrderCar.module.scss';

import { HeaderOnHomepage, OrderButton, OrderCarInput } from '../../../components';
import { Whatsapp, Telegram } from '../../../assets/icons';
import politic_doc from '../../../assets/documents/politic.pdf';

const OrderCar = () => {

    const [application, setApplication] = useState({
        marka: '',
        model: '',
        mileage: '',
        budgetFrom: '',
        budgetUpTo: '',
        yearFrom: '',
        yearUpTo: '',
        name: '',
        phone: '',
        whatsapp: false,
        telegram: false,
    });

    const vremennoe = (e) => {
        e.preventDefault();

        setApplication({
            ...application,
            marka: '',
            model: '',
            mileage: '',
            budgetFrom: '',
            budgetUpTo: '',
            yearFrom: '',
            yearUpTo: '',
            name: '',
            phone: '',
            whatsapp: false,
            telegram: false,
        })
    }

    useEffect(() => {
        console.log(application)
    }, [application])

    const formattedNumberValue = (e) => {
        const value = e.target.value;
        const sanitizedValue = value.replace(/ /g, "");
        const formattedValue = sanitizedValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return formattedValue
    }

    return (
        <section id='carOrder' className={styles.container}>
            <HeaderOnHomepage>Информация для заказа автомобиля</HeaderOnHomepage>
            <form className={styles.form}>
                <OrderCarInput
                    value={application.marka}
                    onChange={e => setApplication({ ...application, marka: e.target.value })}
                    type='text'
                    placeholder='Марка авто'
                />
                <OrderCarInput
                    value={application.model}
                    onChange={e => setApplication({ ...application, model: e.target.value })}
                    type='text'
                    placeholder='Модель авто'
                />
                <div className={styles.formBlock}>
                    <p>Пробег (км):</p>
                    <OrderCarInput
                        value={application.mileage}
                        onChange={e => setApplication({ ...application, mileage: formattedNumberValue(e) })}
                        type='text'
                        placeholder='до'
                    />
                </div>
                <div className={styles.formBudget}>
                    <p>Бюджет (₽):</p>
                    <OrderCarInput
                        value={application.budgetFrom}
                        onChange={e => setApplication({ ...application, budgetFrom: formattedNumberValue(e) })}
                        type='text'
                        placeholder='от'
                    />
                    <OrderCarInput
                        value={application.budgetUpTo}
                        onChange={e => setApplication({ ...application, budgetUpTo: formattedNumberValue(e) })}
                        type='text'
                        placeholder='до'
                    />
                </div>
                <div className={styles.formBlock}>
                    <p>Год:</p>
                    <OrderCarInput
                        value={application.yearFrom}
                        onChange={e => setApplication({ ...application, yearFrom: e.target.value })}
                        type='text'
                        placeholder='от'
                    />
                    <OrderCarInput
                        value={application.yearUpTo}
                        onChange={e => setApplication({ ...application, yearUpTo: e.target.value })}
                        type='text'
                        placeholder='до'
                    />
                </div>
                <OrderCarInput
                    value={application.name}
                    onChange={e => setApplication({ ...application, name: e.target.value })}
                    type='text'
                    placeholder='Иванов Иван Иванович'
                />
                <OrderCarInput
                    value={application.phone}
                    onChange={e => setApplication({ ...application, phone: e.target.value })}
                    type='text'
                    placeholder='+7 (999) 999-99-99'
                />
                <div className={styles.formMessendger}>
                    <p>Мессенджер для связи</p>
                    <div>
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
                </div>
                <p className={styles.politic}>Нажимая кнопку Отправить, вы соглашаетесь с <a href={politic_doc} target='_blank' rel="noreferrer">Политикой обработки персональных данных</a></p>
                <div className={styles.buttonWrapper}>
                    <OrderButton onClick={vremennoe}>Отправить</OrderButton>
                </div>
            </form>
        </section>
    )
}

export default OrderCar;