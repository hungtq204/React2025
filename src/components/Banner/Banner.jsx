import React from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

const Banner = () => {
    const { container, content, title, des } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>XStore Marseille</h1>
                <div className={des}>Make yours celebrations even more special this years with beautiful.</div>
                <Button content={'Go to shop'} />
            </div>
        </div>
    );
};

export default Banner;
