import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import React from 'react';
import styles from './styles.module.scss';
import AdvenceHeadling from '@components/AdvenceHeadling/AdvenceHeadling';
import Infor from '@components/Info/Infor';
import MainLayout from '@components/Layout/Layout';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
const HomePage = () => {
    const { containerHeader } = styles;
    return (
        <>
            <div className={containerHeader}>
                <MyHeader />
                <Banner />
                <MainLayout>
                    <Infor />
                    <AdvenceHeadling />
                    <HeadingListProduct />
                </MainLayout>
            </div>
        </>
    );
};

export default HomePage;
