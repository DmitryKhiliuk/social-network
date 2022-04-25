import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <NavLink to={'/Profile'} className={el => el.isActive ? styles.active : styles.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to={'/Messages'} className={el => el.isActive ? styles.active : styles.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to={'/News'} className={el => el.isActive ? styles.active : styles.item}>News</NavLink>
            </div>
            <div>
                <NavLink to={'/Music'} className={el => el.isActive ? styles.active : styles.item}>Music</NavLink>
            </div>
            <div>
                <NavLink to={'/Settings'} className={el => el.isActive ? styles.active : styles.item}>Settings</NavLink>
            </div>
        </nav>


    );
};

