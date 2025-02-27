import Button from '../../../_components/button/button';
import WhiteFishLogo from '../../../_components/white-fish-logo';
import Styles from './Catering.module.scss';

import { Nunito } from 'next/font/google';

const nunito = Nunito({
    weight: '500',
    subsets: ['latin'],
})

export default function Catering() {
    return (
        <section className={Styles.catering}>
            <div className={Styles.catering__container}>

                <h2 className={Styles.catering__container__title}>Catering</h2>

                <div className={Styles.articlesContainer}>

                    <article className={Styles.articlesContainer__texts}>
                        <h2 className={Styles.articlesContainer__texts__title}>Catering</h2>
                        <h3 className={Styles.articlesContainer__texts__subtitle}>OUR INFAMOUS
                            TACO BOX</h3>
                        <p className={nunito.className}>The famous Holé Molé Taco Box serves 25-30 people and is guaranteed to be a hit at your next event.</p>

                        <Button ><WhiteFishLogo /> PLACE A CATERING ORDER</Button>
                    </article>

                    <article className={Styles.articlesContainer__img}>
                        <img src="assets/holeMole_TacoBox.png" alt="Taco box" />
                    </article>
                </div>

            </div>
        </section>
    );
}