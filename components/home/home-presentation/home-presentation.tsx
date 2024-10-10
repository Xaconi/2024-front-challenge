"use client"

import Image from "next/image";
import styles from './home-presentation.module.scss'
import useIsMobile from "@/hooks/useIsMobile";

export default function HomePresentation() {
    const isMobile = useIsMobile();

    return (

        <section className={styles.homePresentation}>
            <Image
                src="/Home.webp"
                width={1903}
                height={947}
                className={styles.homePresentation__img}
                alt="Home presentation"
            />

            <Image
                src="/Home_mobile.webp"
                width={1903}
                height={947}
                className={styles.homePresentation__img_mobile}
                alt="Home presentation"
            />

            <h1 className={`${styles.homePresentation__title} khui-text khui-color-white khui-text--bold ${isMobile ? `khui-text--m` : `khui-text--xl`}`}>
                Cuando la realidad supera la ficción.
                Trucos para estar en casa.
            </h1>
        </section>
    )
}