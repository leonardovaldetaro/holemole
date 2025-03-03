"use client"

import { useState } from 'react';
import Logo from '../logo/Logo';
import Styles from './Header.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import Button from '../button/button';
import { FaTruckFast, FaFacebook, FaSquareInstagram } from 'react-icons/fa6';
import { IconContext } from 'react-icons';

import { Nunito } from 'next/font/google';

const nunito = Nunito({
    weight: '500',
    subsets: ['latin'],
})



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
    }, {
        label: 'Employment',
        to: '/employment'
    }]

    const [isActive, setActive] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
        setActive(!isActive);
    }

    const closeMenu = () => {
        if (isOpen) {
            setOpen(false);
            setActive(false);
        }
    };

    return (
        <header className={Styles.header}>

            <div className={Styles.headerContainer}>

                <div className={Styles.headerContainer__logo}>
                    <Link href={"/"} onClick={closeMenu}>
                        <Logo />
                    </Link>
                </div>

                <div className={Styles.headerContainer__navButton} onClick={toggleMenu}>

                    <div className={Styles.headerContainer__navButton__bar}></div>
                    <div className={Styles.headerContainer__navButton__bar}></div>
                    <div className={Styles.headerContainer__navButton__bar}></div>

                </div>
            </div>

            <nav
                className={classNames({
                    [Styles.navMenu]: !false,
                    [Styles['navMenu--open']]: isOpen
                })}
            >
                <ul className={Styles.navMenu__list}>
                    {rotaNav.map((rota, index) => (
                        <li
                            className={Styles.navMenu__list__item}
                            key={index}
                        >
                            <Link
                                className={Styles.navMenu__list__item__link}
                                onClick={toggleMenu}
                                href={rota.to}
                            >
                                {rota.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Button><FaTruckFast />Order Online Now</Button>

                <IconContext.Provider value={{ size: "2em", className: "global-class-name" }}>
                    <div className={Styles.header__socialMediaContainer}>
                        <a href={"https://www.facebook.com/hole.mole/"} target='new' className={Styles.header__socialMediaContainer__link}><FaFacebook /></a>
                        <a href={"https://www.instagram.com/holemole/"} target='new' className={Styles.header__socialMediaContainer__link}><FaSquareInstagram /></a>
                    </div>
                </IconContext.Provider>

                <div className={Styles.header__copyright}>
                    <span className={nunito.className}>Holé Molé 2025 - All rights reserved.</span>
                </div>
            </nav>

        </header>
    );
}