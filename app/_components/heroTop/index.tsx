import Button from '../button/button';
import Styles from './HeroTop.module.scss';
import { FaTruckFast } from "react-icons/fa6";


export default function Hero() {
    return (
        <section className={Styles.hero}>
            <div className={Styles.heroContainer}>

                <div className={Styles.heroContainer__left}>
                    <h1 className={Styles.heroContainer__left__title}>
                        one bite<br />
                        <span className={Styles.heroContainer__left__title__smaller}>and you're </span><br />
                        <span className={Styles.heroContainer__left__title__biger}>hooked!</span>
                    </h1>
                    <Button><FaTruckFast /> Order Now</Button>
                </div>
                <div className={Styles.heroContainer__right}>
                    <img src="/assets/AdobeStock_760337495_Preview.png" alt="" className={Styles.heroContainer__right__img} />
                </div>
            </div>
        </section>
    );
}