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

import './slide.css';
import WhiteFishLogo from '../../../_components/white-fish-logo';

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
            >
                <SwiperSlide>
                    <div className={Styles.container}>
                        <div className={Styles.container__content}>
                            <h2 className={Styles.container__content__title}>Taco<br /> Tuesday</h2>
                            <p className={nunito.className}>Taco Tuesday at Holé Molé! Gather your friends and enjoy mouthwatering tacos paired with the best drinks in town. The perfect way to spice up your week! See you after work! Offers and participation may vary by location.</p>
                            <Button><WhiteFishLogo />Check out our menu!</Button>
                        </div>
                        <div className={Styles.slideImage}>
                            <img src="assets/taco-tuesday.jpg" alt="Taco tuesday" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}