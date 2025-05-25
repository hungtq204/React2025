import React from 'react';
import MainLayout from '@components/Layout/Layout';
import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import HomePage from '@components/HomePage/HomePage';
import Infor from '@components/Info/Infor';

const App = () => {
    return (
        <div>
            <HomePage />
            <Infor />
        </div>
    );
};

export default App;
