"use client"

import Hero from './_components/heroTop';
import Styles from './Page.module.scss'


export default function Page() {
    return (
        <main className={Styles.main}>
            <Hero />
        </main>
    );
  }