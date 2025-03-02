import Button from '../../../_components/button/button';
import ColoredLogoOneLine from '../../../_components/coloredLogoOneLine';
import WhiteFishLogo from '../../../_components/white-fish-logo';
import Styles from './cta.module.scss';

export default function Cta() {
    return (
        <section className={Styles.ctaSection}>
            <div className={Styles.ctaSection__container}>
                <h2 className={Styles.ctaSection__container__title}>REAL TACOS</h2>
                <h2 className={Styles.ctaSection__container__title}>REAL FRESHNESS</h2>
                <h2 className={Styles.ctaSection__container__title}>REAL FLAVORS</h2>
            </div>
            <ColoredLogoOneLine />
            <div className={Styles.ctaSection__button}>
                <Button><WhiteFishLogo />Check Locations</Button>
            </div>
        </section>
    );
}