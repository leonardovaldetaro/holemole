'use client';

import Styles from './carousel.module.scss';
import Button from '../../../_components/button/button';
import { useEffect, useMemo, useState } from 'react';

//import swiper modules and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './carousel.css';
import WhiteFishLogo from '../../../_components/white-fish-logo';
import { slidesData } from './slidesData';

export default function Carousel() {
    const slides = useMemo(() => slidesData, []);

    return (
        <section className={Styles.carouselMain}>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation
                pagination={{ clickable: true }}
                loop
                className={Styles.swiper}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className={Styles.carouselImage}
                            style={{ backgroundImage: `url(${slide.background})` }}
                        >
                            <div className={Styles.carouselContentCenter}>
                                <div className={Styles.carouselTitleContainer}>
                                    <h1 className={Styles.carouselTitle}>{slide.title}</h1>
                                    <Button><WhiteFishLogo /> Order Online Now</Button>
                                </div>
                                <div className={Styles.carouselImageContainer}>
                                    <img src={slide.image} alt={`Image of ${slide.title}`} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}