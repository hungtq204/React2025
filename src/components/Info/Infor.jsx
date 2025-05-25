import React from 'react';
import MainLayout from '@components/Layout/Layout';
import { dataInfo } from '@components/Info/constants';
import InfoCart from '@components/Info/InfoCart/InfoCart';
import styles from './styles.module.scss';
const Infor = () => {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                {dataInfo.map((item, index) => {
                    return <InfoCart content={item.title} description={item.description} src={item.src} />;
                })}
            </div>
        </MainLayout>
    );
};

export default Infor;
