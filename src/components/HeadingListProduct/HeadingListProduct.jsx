import React from 'react';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
const HeadingListProduct = () => {
    const { container, containerItem } = styles;

    //  return <CountdownTimer targetDate={targetDate}></CountdownTimer>;
    return (
        <div className={container}>
            <CountdownBanner />
            <div className={containerItem}>
                <div>1</div>
                <div>2</div>
            </div>
        </div>
    );
};

export default HeadingListProduct;
