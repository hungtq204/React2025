import styles from './styles.module.scss';
import React from 'react';

const Button = ({ content }) => {
    const { btn } = styles;
    return <button className={btn}>{content}</button>;
};

export default Button;
