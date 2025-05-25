import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';
import React from 'react';

const BoxIcon = ({ type, href }) => {
    const { boxIcon } = styles;
    const handleRenderIcon = type => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return insIcon;
            case 'ytb':
                return ytbIcon;
            default:
                return null;
        }
    };
    return (
        <div className={boxIcon}>
            <img src={handleRenderIcon(type)} alt={type} />
        </div>
    );
};

export default BoxIcon;
