import React from 'react';
import MainLayout from '@components/Layout/Layout';
import { dataInfo } from '@components/Info/constants';
import InfoCart from '@components/Info/InfoCart/InfoCart';
import styles from './styles.module.scss';

const Infor = () => {
    const { container } = styles;
    return (
        <div className={container}>
            {dataInfo.map((item, index) => {
                return <InfoCart key={index} content={item.title} description={item.description} src={item.src} />;
            })}
        </div>
    );
};

export default Infor;
