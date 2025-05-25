import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import React from 'react';
import styles from './styles.module.scss';
const HomePage = () => {
    const { containerHeader } = styles;
    return (
        <div>
            <div className={containerHeader}>
                <MyHeader />
                <Banner />
            </div>
        </div>
    );
};

export default HomePage;
