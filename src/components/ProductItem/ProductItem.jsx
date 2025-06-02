import React from 'react';
import styles from './styles.module.scss';
import reLoadIcon from '@icons/svgs/reloadIcon.svg';
import heartIcon from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';

const ProductItem = ({ src, preSrc, name, price }) => {
      const { boxImg, showImgwhenHover, showFnwhenHover, boxIcon, title, priceClass } = styles;
      return (
            <div>
                  <div className={boxImg}>
                        <img src={src} alt='' />
                        <img src={preSrc} alt='' className={showImgwhenHover} />
                        <div className={showFnwhenHover}>
                              <div className={boxIcon}>
                                    <img src={cartIcon} alt='' />
                              </div>
                              <div className={boxIcon}>
                                    <img src={heartIcon} alt='' />
                              </div>
                              <div className={boxIcon}>
                                    <img src={reLoadIcon} alt='' />
                              </div>
                              <div className={boxIcon}>
                                    <img src={cartIcon} alt='' />
                              </div>
                        </div>
                  </div>
                  <div className={title}>{name}</div>
                  <div className={priceClass}>${price}</div>
            </div>
      );
};

export default ProductItem;
