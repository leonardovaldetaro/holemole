'use client';

import Styles from './carousel.module.scss';
import Button from '../../../_components/button/button';
import { useEffect, useState } from 'react';

//import swiper modules and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './carousel.css';
import WhiteFishLogo from '../../../_components/white-fish-logo';

const slides = [
    {
        id: 1,
        background: "/assets/holeMole-texture.svg",
        title: "one bite and you're hooked!",
        image: "/assets/soft-tacos-hero-top.png"
    },
    {
        id: 2,
        background: "/assets/holeMole-texture.svg",
        title: "A whole lot of flavor!",
        image: "/assets/holeMole-burrito.png"
    },
    {
        id: 3,
        background: "/assets/holeMole-texture.svg",
        title: "Fresh, zesty, and made to savor!",
        image: "/assets/holeMole-cevitch.png"
    },
]

export default function Carousel() {

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
                                    <img src={slide.image} alt={slide.title} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}