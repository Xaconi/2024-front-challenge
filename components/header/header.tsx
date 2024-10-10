// Styles
import Image from 'next/image';
import stylesHeader from './header.module.scss';
import { headers } from 'next/headers';

export default function Header() {
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    const isFavoritePath = pathname === '/favorites';

    return (
        <header className={stylesHeader.header}>
            <Image
                src="/Logo_KaveHome.svg"
                width={172}
                height={31}
                className={stylesHeader.header__khlogo}
                alt="Kave Home logo"
            />

            {!isFavoritePath && <Image
                src="/Favorite_Icon.svg"
                width={22}
                height={19}
                alt="Favorites"
            />}


            {isFavoritePath && <Image
                src="/Favorite_Icon_Filled.svg"
                width={22}
                height={19}
                alt="Favorites"
            />}
        </header>
    )
}