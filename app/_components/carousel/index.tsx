'use client';

import Styles from './carousel.module.scss';
import Button from '../button/button';
import { FaTruckFast } from "react-icons/fa6";
import { useEffect, useState } from 'react';

//import swiper modules and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const slides = [
    {
        id: 1,
        image: "/assets/testeBackground-tacos.jpg",
        title: "one bite and you're hooked!"
    },
    {
        id: 2,
        image: "/assets/testeBacground-tacos-2.jpg",
        title: "A whole lot of flavor!"
    },
    {
        id: 3,
        image: "/assets/testeBacground-tacos-3.jpg",
        title: "Fresh, zesty, and made to savor!"
    },
]

export default function Carousel() {
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Verifica o tamanho ao montar o componente
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <section className={Styles.carouselMain}>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                navigation={!isMobile ? true : false}
                pagination={{ clickable: true }}
                loop
                className={Styles.swiper}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className={Styles.carouselImage}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className={Styles.carouselContentCenter}>
                                <div className={Styles.carouselTitleContainer}>
                                    <h1 className={Styles.carouselTitle}>{slide.title}</h1>
                                    <Button><FaTruckFast /> Order Online Now</Button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}