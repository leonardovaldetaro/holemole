"use client"

import { useState } from 'react';
import Logo from '../logo/Logo';
import Styles from './Header.module.scss';
import classNames from 'classnames';

export default function Header() {
    const rotaNav = [{
        label: 'Home',
        to: '/'
    }, {
        label: 'About',
        to: '/about'
    }, {
        label: 'Menu',
        to: '/menu'
    }, {
        label: 'Locations',
        to: '/Locations'
    }]

    const [isActive, setActive] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
        setActive(!isActive);
    }

    return (
        <header className={classNames({
            [Styles.header]: !false,
            [Styles.headerOpen]: isOpen
        })}>

            <div className={Styles.headerContainer}>

                <div className={Styles.headerContainer__logo}>
                    <Logo />
                </div>

                <div className={Styles.headerContainer__navButton}>
                    <div className={Styles.headerContainer__navButton__bar}></div>
                    <div className={Styles.headerContainer__navButton__bar}></div>
                    <div className={Styles.headerContainer__navButton__bar}></div>
                </div>

            </div>
        </header>
    );
}