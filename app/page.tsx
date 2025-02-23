"use client"

import Carousel from './_components/carousel';
import Hero from './_components/heroTop';
import Styles from './Page.module.scss'


export default function Page() {
    return (
        <main className={Styles.main}>
            <Carousel />
            <Hero />
        </main>
    );
  }