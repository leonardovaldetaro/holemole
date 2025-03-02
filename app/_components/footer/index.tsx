import Link from 'next/link';
import LogoColor from '../coloredLogo';
import Styles from './footer.module.scss';
import { FaFacebook, FaSquareInstagram } from 'react-icons/fa6';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
    weight: '700',
    subsets: ['latin'],
})


export default function Footer() {

    const navFooter = [{
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

    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer__container}>

                <div className={Styles.footer__container__left}>
                    <LogoColor />
                    <p className={nunito.className}>We are a family-owned and operated chain serving Long Beach, Carson, Tustin, Huntington Beach, and Costa Mesa.</p>
                    <h4 className={nunito.className}>Interested in working with us?</h4>
                    <Link href={"/"} className={Styles.footer__container__left__link}>We are hiring</Link>
                </div>

                <div className={Styles.footer__container__menu}>
                    <h2 className={Styles.footer__container__menu__title}>Quick Links</h2>
                    <ul className={Styles.footer__container__menu__list}>
                        {navFooter.map((rota, index) => (
                            <li
                                className={Styles.footer__container__menu__list__item}
                                key={index}
                            >
                                <Link
                                    className={Styles.footer__container__menu__list__item__link}
                                    href={rota.to}
                                >
                                    {rota.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <h2 className={Styles.footer__container__menu__title}>Folow us</h2>

                    <div className={Styles.socialMediaContainer}>
                        <a href={"https://www.facebook.com/hole.mole/"} target='new' className={Styles.socialMediaContainer__link}><FaFacebook style={{ fontSize: "32px", color: "#2E3192" }} /></a>
                        <a href={"https://www.instagram.com/holemole/"} target='new' className={Styles.socialMediaContainer__link}><FaSquareInstagram style={{ fontSize: "32px", color: "#2E3192" }} /></a>
                    </div>

                </div>

            </div>
            <section className={Styles.copyright}>
                <div className={Styles.copyright__container}>
                    <p className={nunito.className}>Holé Molé 2025 - All rights reserved.</p>
                </div>
            </section>
        </footer>
    );
}