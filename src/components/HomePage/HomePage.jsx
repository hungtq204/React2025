import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import AdvenceHeadling from '@components/AdvenceHeadling/AdvenceHeadling';
import Infor from '@components/Info/Infor';
import MainLayout from '@components/Layout/Layout';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { getProducts } from '@/apis/productsSevices';
import PopularProduct from '@components/PopularProduct/PopularProduct';

const HomePage = () => {
      const [listProducts, setListProducts] = useState([]);
      useEffect(() => {
            //console.log(getProducts());
            getProducts().then(res => {
                  setListProducts(res.contents);
            });
      }, []);
      //console.log(listProducts);
      const { containerHeader } = styles;
      return (
            <>
                  <div className={containerHeader}>
                        <MyHeader />
                        <Banner />
                        <MainLayout>
                              <Infor />
                              <AdvenceHeadling />
                              <HeadingListProduct data={listProducts.slice(0, 2)} />
                              <PopularProduct data={listProducts.slice(2, 10)} />
                        </MainLayout>
                  </div>
            </>
      );
};

export default HomePage;
