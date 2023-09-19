import React, { useEffect, useState } from 'react';
import styles from './FAQ.module.scss';

import axios from 'axios';

import { HeaderOnHomepage } from '../../../components';
import { FAQIconMinus, FAQIconPlus } from '../../../assets/icons';

const FAQ = () => {

    const [items, setItems] = useState(null);

    async function fetchFAQ() {
        // const response = await axios.get('http://194.67.121.62:8005/v1/faq');
        const response = await axios.get('https://api.ilanavto.ru/v1/faq');
        setItems(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchFAQ()
    }, [])

    const [questionId, setQuestionId] = useState(null);

    return (
        <section id='faq' className={styles.container}>
            <HeaderOnHomepage>FAQ</HeaderOnHomepage>
            <div className={styles.questionsBlock}>
                {items && items.map((item) =>
                    <div key={item.id} className={questionId === item.id ? styles.itemBlockActive : styles.itemBlock}>
                        <div>
                            <p className={styles.question}>{item.question}</p>
                            <div className={questionId === item.id ? styles.answerWrapper : styles.answerHideWrapper}>
                                <p className={styles.answer}>{item.answer}</p>
                            </div>
                        </div>
                        {questionId === item.id
                            ? <FAQIconMinus onClick={() => setQuestionId(null)} />
                            : <FAQIconPlus onClick={() => setQuestionId(item.id)} />
                        }
                    </div>
                )}
            </div>
        </section>
    )
}

export default FAQ;