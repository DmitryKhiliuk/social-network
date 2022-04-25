import React from 'react';
import styles from './Header.module.css'
import picture from './../../pictures/—Pngtree—creative company_1420804.png'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div ><img src={picture} className={styles.logo} alt=""/></div>
        </div>
    );
};

