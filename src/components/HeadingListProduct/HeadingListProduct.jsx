import React from 'react';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';
const HeadingListProduct = () => {
    const { container, containerItem } = styles;

    //  return <CountdownTimer targetDate={targetDate}></CountdownTimer>;
    return (
        <div className={container}>
            <CountdownBanner />
            <div className={containerItem}>
                <ProductItem />
                <ProductItem />
                <div>2</div>
            </div>
        </div>
    );
};

export default HeadingListProduct;
