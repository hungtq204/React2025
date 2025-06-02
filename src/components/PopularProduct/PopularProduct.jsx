import React from 'react';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';

const PopularProduct = ({ data }) => {
      const { container } = styles;
      return (
            <div className={container}>
                  {data.map((item, index) => (
                        <ProductItem
                              key={index}
                              src={item.images[0]}
                              preSrc={item.images[1]}
                              name={item.name}
                              price={item.price}
                        />
                  ))}
            </div>
      );
};

export default PopularProduct;
