'use client';

//import swiper modules and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Styles from './Slide.module.scss';
import Button from '../../../_components/button/button';
import classNames from 'classnames';

import WhiteFishLogo from '../../../_components/white-fish-logo';
import BlueFish from '../../../_components/blueFish';

import { Nunito } from 'next/font/google';

const nunito = Nunito({
    weight: '500',
    subsets: ['latin'],
})

export default function Slide() {
    return (
        <section className={Styles.slide}>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                loop
            >
                <SwiperSlide>
                    <div className={Styles.container}>
                        <div className={Styles.container__content}>
                            <BlueFish />
                            <h2 className={Styles.container__content__title}>Taco<br /> Tuesday</h2>
                            <p className={nunito.className}>Taco Tuesday at Holé Molé! Gather your friends and enjoy mouthwatering tacos paired with the best drinks in town.</p>
                            <Button><WhiteFishLogo />Check out our menu!</Button>
                        </div>
                        <div className={classNames(Styles.slideImage, Styles.slideImage__01)}>
                            {/* <img src="assets/taco-tuesday.jpg" alt="Taco tuesday" /> */}
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={Styles.container}>
                        <div className={Styles.container__content}>
                            <BlueFish />
                            <h2 className={Styles.container__content__title}>happy<br />hour</h2>
                            <p className={nunito.className}>Nothing better than great drinks and amazing flavors to end the day. Unwind with us, enjoy refreshing cocktails, and savor delicious bites.</p>
                            <Button><WhiteFishLogo />Check out our menu!</Button>
                        </div>
                        <div className={classNames(Styles.slideImage, Styles.slideImage__02)}>
                            {/* <img src="assets/hapy-hour.jpg" alt="Taco tuesday" /> */}
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={Styles.container}>
                        <div className={Styles.container__content}>
                            <BlueFish />
                            <h2 className={Styles.container__content__title}>sunday<br /> funday</h2>
                            <p className={nunito.className}>Nothing better than great drinks, amazing flavors, and delicious desserts to make the most of your Sunday.</p>
                            <Button><WhiteFishLogo />Check out our menu!</Button>
                        </div>
                        <div className={classNames(Styles.slideImage, Styles.slideImage__03)}>
                            {/* <img src="assets/sunday-funday.jpg" alt="Taco tuesday" /> */}
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
}