import React from 'react';
import CountdownTimer from '@components/CountdownTimer/CountdownTimer';
import styles from './styles.module.scss';
import CountdownBanner from '@components/CountdownBanner/CountdownBanner';
import ProductItem from '@components/ProductItem/ProductItem';
const HeadingListProduct = ({ data }) => {
      //console.log(data);
      const { container, containerItem } = styles;

      //  return <CountdownTimer targetDate={targetDate}></CountdownTimer>;
      return (
            <div className={container}>
                  <CountdownBanner />
                  <div className={containerItem}>
                        {data.map((item, index) => {
                              return (
                                    <ProductItem
                                          key={index}
                                          src={item.images[0]}
                                          preSrc={item.images[1]}
                                          name={item.name}
                                          price={item.price}
                                    />
                              );
                        })}
                  </div>
            </div>
      );
};

export default HeadingListProduct;
