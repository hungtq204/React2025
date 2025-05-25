import React from 'react';
import styles from './styles.module.scss';
const MainLayout = ({ children }) => {
    const { wrapLayout, container } = styles;
    return (
        <main className={wrapLayout}>
            <div className={container}>{children}</div>
        </main>
    );
};

export default MainLayout;
