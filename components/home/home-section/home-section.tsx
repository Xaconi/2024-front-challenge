import Link from 'next/link';
import styles from './home-section.module.scss';
import Image from 'next/image';

export default function HomeSection(props: { title: string, img: string, link: string }) {
    return (
        <Link href={props.link} className={styles.homeSection}>
            <Image
                src={props.img}
                width={198}
                height={149}
                className={styles.homeSection__img}
                alt={props.title}
            />
            <h3 className={`${styles.homeSection__title} khui-text khui-color-black khui-text--regular khui-text--s khui-text-underline`}>
                {props.title}
            </h3>
        </Link>
    )
}
