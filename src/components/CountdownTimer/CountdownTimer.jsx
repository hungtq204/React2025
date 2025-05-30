import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const CountdownTimer = ({ targetDate }) => {
    const { box, title } = styles;
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Hinutes: Math.floor((difference / 1000 / 60) % 60),
                Secs: Math.floor((difference / 1000) % 60)
            };
        }
        return timeLeft;
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    });
    const formatNumber = num => {
        return String(num).padStart(2, '0');
    };

    const timerComponents = [];
    Object.keys(timeLeft).forEach(interval => {
        if (timeLeft[interval] !== undefined) {
            timerComponents.push(
                <span key={interval} className={box}>
                    {formatNumber(timeLeft[interval])} <span className={title}>{interval}</span>{' '}
                </span>
            );
        }
    });
    return timerComponents;
};

export default CountdownTimer;
