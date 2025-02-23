import HeroTop25Y from './_heroTopImg';
import Styles from './HeroTop.module.scss';



export default function Hero() {
    return (
        <section className={Styles.hero}>
            <div className={Styles.heroContainer}>
                <div className={Styles.heroContainer__left}>
                    <HeroTop25Y />
                </div>
                <div className={Styles.heroContainer__right}>
                    <p className={Styles.heroContainer__right__text}>
                        We’ve been serving Mexican-Inspired Favorites for over 25 years, what we consider to be
                    </p>
                    <p className={Styles.heroContainer__right__text__orange}>
                        “Southern California Comfort Food”
                    </p>
                </div>
            </div>
        </section>
    );
}