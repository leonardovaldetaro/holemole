"use client"

import Cta from './home/_components/cta';
import Carousel from './home/_components/carousel';
import Hero from './home/_components/heroTop';
import Catering from './home/_components/sectionCatering';
import Styles from './Page.module.scss'
import SkipLine from './home/_components/skipLine';
import Slide from './home/_components/slide';


export default function Page() {
    return (
        <main className={Styles.main}>
            <Carousel />
            <Hero />
            <Catering />
            <SkipLine />
            <Cta />
            <Slide />
        </main>
    );
  }