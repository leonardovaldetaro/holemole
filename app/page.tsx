"use client"

import Cta from './home/_components/cta';
import Carousel from './home/_components/carousel';
import Hero from './home/_components/heroTop';
import Catering from './home/_components/sectionCatering';
import Styles from './Page.module.scss'
import SkipLine from './home/_components/skipLine';


export default function Page() {
    return (
        <main className={Styles.main}>
            <Carousel />
            <Hero />
            <Catering />
            <SkipLine />
            <Cta />
        </main>
    );
  }