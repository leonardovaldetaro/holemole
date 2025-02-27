"use client"

import Carousel from './home/_components/carousel';
import Hero from './home/_components/heroTop';
import Catering from './home/_components/sectionCatering';
import Styles from './Page.module.scss'


export default function Page() {
    return (
        <main className={Styles.main}>
            <Carousel />
            <Hero />
            <Catering />
        </main>
    );
  }