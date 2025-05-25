import MainLayout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';
const AdvenceHeadling = () => {
    const { container, headline, containerMiddleBox, des, title } = styles;
    return (
        <>
            <div className={container}>
                <div className={headline}></div>
                <div className={containerMiddleBox}>
                    <p className={des}>don't miss super offers</p>
                    <p className={title}>Our best products</p>
                </div>
                <div className={headline}></div>
            </div>
        </>
    );
};

export default AdvenceHeadling;
