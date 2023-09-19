import React, { useState, useEffect } from 'react';
import styles from './Footer.module.scss';

import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

import Logo from '../Logo/Logo';
import SocialLink from '../SocialLink/SocialLink';

import useElementVisible from '../../hooks/useElementVisible';
import { DeveloperIcon, DeveloperName } from '../../assets/icons';

const Footer = () => {

    const [contacts, setContacts] = useState(null);

    async function fetchContacts() {
        // const response = await axios.get('http://194.67.121.62:8005/v1/contacts');
        const response = await axios.get('https://api.ilanavto.ru/v1/contacts');
        setContacts(response.data.data);
        console.log(response.data.data);
    }

    useEffect(() => {
        fetchContacts()
    }, [])

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const currentPath = '/';
    const idArray = ['carOrder', 'clientReviews', 'faq'];
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
    }

    return (
        <footer className={styles.container} id='contacts'>
            <div className={styles.footerTop}>
                <Logo styles={styles.logo} />
                <div className={styles.navbar}>
                    <div>
                        <NavLink
                            to='/catalog'
                            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                        >
                            Машины в наличии
                        </NavLink>
                        <a href='#carOrder' onClick={(e) => handleClickAnchor('carOrder', e)} className={activeAnchor === 'carOrder' ? styles.activeLink : styles.link}>Заказ авто</a>

                    </div>
                    <div>
                        {/* <a href='#team' onClick={(e) => handleClickAnchor('team', e)} className={activeAnchor === 'team' ? styles.activeLink : styles.link}>Команда</a> */}
                        <a href='#clientReviews' onClick={(e) => handleClickAnchor('clientReviews', e)} className={activeAnchor === 'clientReviews' ? styles.activeLink : styles.link}>Отзывы</a>
                        <a href='#faq' onClick={(e) => handleClickAnchor('faq', e)} className={activeAnchor === 'faq' ? styles.activeLink : styles.link}>FAQ</a>
                        {/* <a href='#aboutUs' onClick={(e) => handleClickAnchor('aboutUs', e)} className={activeAnchor === 'aboutUs' ? styles.activeLink : styles.link}>О нас</a> */}
                        <NavLink
                            to='/premium_car'
                            className={({ isActive }) => isActive ? styles.activeLink : styles.link}
                        >
                            Премиум авто
                        </NavLink>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20.4604 9.63031C20.32 8.16922 19.8036 6.76939 18.9616 5.56713C18.1195 4.36486 16.9805 3.40114 15.6554 2.7698C14.3303 2.13846 12.8642 1.86103 11.4001 1.96451C9.93592 2.068 8.5235 2.54887 7.30037 3.36031C6.24957 4.06295 5.36742 4.98961 4.71731 6.0737C4.0672 7.15779 3.66526 8.37241 3.54037 9.63031C3.41785 10.88 3.57504 12.1412 4.00054 13.3226C4.42604 14.5039 5.10917 15.5758 6.00037 16.4603L11.3004 21.7703C11.3933 21.864 11.5039 21.9384 11.6258 21.9892C11.7477 22.04 11.8784 22.0661 12.0104 22.0661C12.1424 22.0661 12.2731 22.04 12.3949 21.9892C12.5168 21.9384 12.6274 21.864 12.7204 21.7703L18.0004 16.4603C18.8916 15.5758 19.5747 14.5039 20.0002 13.3226C20.4257 12.1412 20.5829 10.88 20.4604 9.63031ZM16.6004 15.0503L12.0004 19.6503L7.40037 15.0503C6.72246 14.3724 6.20317 13.5526 5.87984 12.6501C5.5565 11.7475 5.43715 10.7845 5.53037 9.83031C5.62419 8.86141 5.93213 7.92547 6.43194 7.09015C6.93175 6.25483 7.61093 5.54102 8.42037 5.00031C9.48131 4.29554 10.7267 3.9196 12.0004 3.9196C13.2741 3.9196 14.5194 4.29554 15.5804 5.00031C16.3874 5.53893 17.065 6.24959 17.5647 7.08125C18.0644 7.9129 18.3737 8.84491 18.4704 9.81031C18.5666 10.7677 18.4488 11.7346 18.1254 12.6409C17.8019 13.5471 17.281 14.3701 16.6004 15.0503ZM12.0004 6.00031C11.1104 6.00031 10.2403 6.26423 9.5003 6.7587C8.76028 7.25316 8.18351 7.95597 7.84291 8.77823C7.50232 9.6005 7.4132 10.5053 7.58684 11.3782C7.76047 12.2511 8.18905 13.053 8.81839 13.6823C9.44773 14.3116 10.2495 14.7402 11.1225 14.9138C11.9954 15.0875 12.9002 14.9984 13.7224 14.6578C14.5447 14.3172 15.2475 13.7404 15.742 13.0004C16.2364 12.2604 16.5004 11.3903 16.5004 10.5003C16.4977 9.30765 16.0228 8.16459 15.1794 7.32125C14.3361 6.4779 13.193 6.00295 12.0004 6.00031ZM12.0004 13.0003C11.5059 13.0003 11.0226 12.8537 10.6114 12.579C10.2003 12.3043 9.87989 11.9138 9.69067 11.457C9.50145 11.0002 9.45194 10.4975 9.54841 10.0126C9.64487 9.52763 9.88297 9.08217 10.2326 8.73254C10.5822 8.38291 11.0277 8.14481 11.5126 8.04835C11.9976 7.95188 12.5003 8.00139 12.9571 8.19061C13.4139 8.37983 13.8043 8.70026 14.079 9.11138C14.3537 9.52251 14.5004 10.0059 14.5004 10.5003C14.5004 11.1634 14.237 11.7992 13.7681 12.2681C13.2993 12.7369 12.6634 13.0003 12.0004 13.0003Z" fill="#E41F1C" />
                        </svg>
                        <p>{contacts && contacts[0].value}</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.4406 12.9994C19.2206 12.9994 18.9906 12.9294 18.7706 12.8794C18.3251 12.7812 17.8873 12.6509 17.4606 12.4894C16.9967 12.3206 16.4867 12.3294 16.0289 12.514C15.5711 12.6986 15.1977 13.046 14.9806 13.4894L14.7606 13.9394C13.7866 13.3976 12.8916 12.7246 12.1006 11.9394C11.3154 11.1484 10.6424 10.2534 10.1006 9.27938L10.5206 8.99938C10.964 8.7823 11.3114 8.40891 11.496 7.95107C11.6806 7.49323 11.6894 6.98329 11.5206 6.51938C11.3618 6.0918 11.2315 5.65418 11.1306 5.20938C11.0806 4.98938 11.0406 4.75938 11.0106 4.52938C10.8892 3.825 10.5202 3.18712 9.97021 2.73062C9.42021 2.27412 8.72529 2.02899 8.01059 2.03938H5.01059C4.57962 2.03533 4.15284 2.12419 3.7593 2.29991C3.36576 2.47563 3.0147 2.73408 2.73002 3.05766C2.44534 3.38125 2.23372 3.76237 2.10958 4.17509C1.98543 4.58781 1.95167 5.02244 2.01059 5.44938C2.54333 9.63876 4.45662 13.5313 7.44824 16.512C10.4399 19.4928 14.3393 21.3919 18.5306 21.9094H18.9106C19.648 21.9105 20.36 21.6399 20.9106 21.1494C21.227 20.8664 21.4797 20.5196 21.6521 20.1317C21.8244 19.7438 21.9126 19.3238 21.9106 18.8994V15.8994C21.8983 15.2048 21.6454 14.5359 21.1949 14.007C20.7445 13.4782 20.1244 13.122 19.4406 12.9994ZM19.9406 18.9994C19.9404 19.1414 19.91 19.2817 19.8514 19.411C19.7927 19.5403 19.7073 19.6557 19.6006 19.7494C19.4892 19.8464 19.3586 19.9188 19.2173 19.9619C19.076 20.005 18.9272 20.0177 18.7806 19.9994C15.0355 19.5192 11.5568 17.8059 8.89331 15.1297C6.22978 12.4535 4.533 8.96672 4.07059 5.21938C4.05467 5.0729 4.06862 4.92471 4.11159 4.78377C4.15456 4.64283 4.22566 4.51207 4.32059 4.39938C4.4143 4.29271 4.52965 4.20722 4.65897 4.1486C4.78829 4.08997 4.9286 4.05956 5.07059 4.05938H8.07059C8.30314 4.05421 8.53021 4.13026 8.71273 4.27445C8.89525 4.41864 9.0218 4.62195 9.07059 4.84938C9.11059 5.12271 9.16059 5.39271 9.22059 5.65938C9.33611 6.18652 9.48985 6.70456 9.68059 7.20938L8.28059 7.85938C8.16089 7.9143 8.05321 7.99233 7.96375 8.08898C7.87428 8.18562 7.80479 8.29899 7.75926 8.42257C7.71373 8.54615 7.69306 8.67751 7.69844 8.8091C7.70381 8.94069 7.73513 9.06992 7.79059 9.18938C9.22979 12.2721 11.7078 14.7502 14.7906 16.1894C15.0341 16.2894 15.3071 16.2894 15.5506 16.1894C15.6753 16.1448 15.7899 16.0758 15.8878 15.9866C15.9856 15.8973 16.0648 15.7895 16.1206 15.6694L16.7406 14.2694C17.2576 14.4543 17.7852 14.6079 18.3206 14.7294C18.5873 14.7894 18.8573 14.8394 19.1306 14.8794C19.358 14.9282 19.5613 15.0547 19.7055 15.2372C19.8497 15.4198 19.9258 15.6468 19.9206 15.8794L19.9406 18.9994Z" fill="#E41F1C" />
                        </svg>
                        <a href={`tel:${contacts && contacts[2].value}`}>{contacts && contacts[2].value}</a>
                    </div>
                    {contacts && contacts[6].value &&
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19.4406 12.9994C19.2206 12.9994 18.9906 12.9294 18.7706 12.8794C18.3251 12.7812 17.8873 12.6509 17.4606 12.4894C16.9967 12.3206 16.4867 12.3294 16.0289 12.514C15.5711 12.6986 15.1977 13.046 14.9806 13.4894L14.7606 13.9394C13.7866 13.3976 12.8916 12.7246 12.1006 11.9394C11.3154 11.1484 10.6424 10.2534 10.1006 9.27938L10.5206 8.99938C10.964 8.7823 11.3114 8.40891 11.496 7.95107C11.6806 7.49323 11.6894 6.98329 11.5206 6.51938C11.3618 6.0918 11.2315 5.65418 11.1306 5.20938C11.0806 4.98938 11.0406 4.75938 11.0106 4.52938C10.8892 3.825 10.5202 3.18712 9.97021 2.73062C9.42021 2.27412 8.72529 2.02899 8.01059 2.03938H5.01059C4.57962 2.03533 4.15284 2.12419 3.7593 2.29991C3.36576 2.47563 3.0147 2.73408 2.73002 3.05766C2.44534 3.38125 2.23372 3.76237 2.10958 4.17509C1.98543 4.58781 1.95167 5.02244 2.01059 5.44938C2.54333 9.63876 4.45662 13.5313 7.44824 16.512C10.4399 19.4928 14.3393 21.3919 18.5306 21.9094H18.9106C19.648 21.9105 20.36 21.6399 20.9106 21.1494C21.227 20.8664 21.4797 20.5196 21.6521 20.1317C21.8244 19.7438 21.9126 19.3238 21.9106 18.8994V15.8994C21.8983 15.2048 21.6454 14.5359 21.1949 14.007C20.7445 13.4782 20.1244 13.122 19.4406 12.9994ZM19.9406 18.9994C19.9404 19.1414 19.91 19.2817 19.8514 19.411C19.7927 19.5403 19.7073 19.6557 19.6006 19.7494C19.4892 19.8464 19.3586 19.9188 19.2173 19.9619C19.076 20.005 18.9272 20.0177 18.7806 19.9994C15.0355 19.5192 11.5568 17.8059 8.89331 15.1297C6.22978 12.4535 4.533 8.96672 4.07059 5.21938C4.05467 5.0729 4.06862 4.92471 4.11159 4.78377C4.15456 4.64283 4.22566 4.51207 4.32059 4.39938C4.4143 4.29271 4.52965 4.20722 4.65897 4.1486C4.78829 4.08997 4.9286 4.05956 5.07059 4.05938H8.07059C8.30314 4.05421 8.53021 4.13026 8.71273 4.27445C8.89525 4.41864 9.0218 4.62195 9.07059 4.84938C9.11059 5.12271 9.16059 5.39271 9.22059 5.65938C9.33611 6.18652 9.48985 6.70456 9.68059 7.20938L8.28059 7.85938C8.16089 7.9143 8.05321 7.99233 7.96375 8.08898C7.87428 8.18562 7.80479 8.29899 7.75926 8.42257C7.71373 8.54615 7.69306 8.67751 7.69844 8.8091C7.70381 8.94069 7.73513 9.06992 7.79059 9.18938C9.22979 12.2721 11.7078 14.7502 14.7906 16.1894C15.0341 16.2894 15.3071 16.2894 15.5506 16.1894C15.6753 16.1448 15.7899 16.0758 15.8878 15.9866C15.9856 15.8973 16.0648 15.7895 16.1206 15.6694L16.7406 14.2694C17.2576 14.4543 17.7852 14.6079 18.3206 14.7294C18.5873 14.7894 18.8573 14.8394 19.1306 14.8794C19.358 14.9282 19.5613 15.0547 19.7055 15.2372C19.8497 15.4198 19.9258 15.6468 19.9206 15.8794L19.9406 18.9994Z" fill="#E41F1C" />
                            </svg>
                            <a href={`tel:${contacts[6].value}`}>{contacts[6].value}</a>
                        </div>
                    }
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM5 6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7L12 11.88L4 7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V9.28L11.48 13.85C11.632 13.9378 11.8045 13.984 11.98 13.984C12.1555 13.984 12.328 13.9378 12.48 13.85L20 9.28V17Z" fill="#E41F1C" />
                        </svg>
                        <a href={`mailto:${contacts && contacts[1].value}`}>{contacts && contacts[1].value}</a>
                    </div>
                    <SocialLink />
                </div>
            </div>
            <div className={styles.footerBot}>
                <div className={styles.left}>
                    <p className={styles.privacy}>© ilanavto.ru 2023</p>
                    <p>Все права защищены</p>
                </div>
                <div>
                    <p>Разработка сайта:</p>
                    <div>
                        <DeveloperIcon className={styles.icon} />
                        <DeveloperName className={styles.name} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;