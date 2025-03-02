import Arrow from './_components/arrow';
import Burrito from './_components/burrito';
import Card from './_components/card';
import FishPack from './_components/fishPack';
import Smile from './_components/smile';
import Styles from './skipLine.module.scss';
import classNames from 'classnames';

import { Nunito } from 'next/font/google';

const nunito = Nunito({
    weight: '500',
    subsets: ['latin'],
})

export default function SkipLine() {
    return (
        <section className={Styles.skipLine}>

                <div className={Styles.skipLine__texts}>
                    <h2 className={Styles.skipLine__texts__title}>SKIP THE LINE <br />and ENJOY</h2>
                    <p className={nunito.className}>Avoid the wait and get your order ready in just a few steps.</p>
                </div>

            <div className={Styles.skipLine__container}>

                <div className={Styles.skipLine__container__card}>
                    <div className={Styles.icon}><Burrito /></div>
                    <h4 className={Styles.skipLine__container__card__title}>choose</h4>
                    <p className={nunito.className}>Select your favorite dishes from our menu.</p>
                </div>
                <div className={Styles.skipLine__container__cardArrow}>
                    <div className={Styles.icon}><Arrow /></div>
                </div>

                <div className={Styles.skipLine__container__card}>
                    <div className={Styles.icon}><Card /></div>
                    <h4 className={Styles.skipLine__container__card__title}>pay</h4>
                    <p className={nunito.className}>Complete your order with a quick and secure payment.</p>
                </div>
                
                <div
                    className={classNames(Styles.skipLine__container__cardArrow, Styles.iconDinamic)}>
                    <div className={Styles.iconDinamic}><Arrow /></div>
                </div>

                <div className={Styles.skipLine__container__card}>
                    <div className={Styles.icon}><FishPack /></div>
                    <h4 className={Styles.skipLine__container__card__title}>pick up</h4>
                    <p className={nunito.className}>Grab your fresh meal at the counter.</p>
                </div>
                <div className={Styles.skipLine__container__cardArrow}>
                    <div className={Styles.icon}><Arrow /></div>
                </div>

                <div className={Styles.skipLine__container__card}>
                    <div className={Styles.icon}><Smile /></div>
                    <h4 className={Styles.skipLine__container__card__title}>enjoy</h4>
                    <p className={nunito.className}>Savor the authentic flavor of Mexico!</p>
                </div>

            </div>
        </section>
    );
}