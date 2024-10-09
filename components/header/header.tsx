// Styles
import Image from 'next/image';
import stylesHeader from './header.module.scss';

export default function Header() {
    return (
        <header className={stylesHeader.header}>
            <Image
                src="/Logo_KaveHome.svg"
                width={172}
                height={31}
                className={stylesHeader.header__khlogo}
                alt="Kave Home logo"
            />

            <Image
                src="/Favorite_Icon.svg"
                width={22}
                height={19}
                alt="Favorites"
            />
        </header>
    )
}