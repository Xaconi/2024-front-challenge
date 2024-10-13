// Styles
import Image from 'next/image';
import stylesHeader from './header.module.scss';
import { headers } from 'next/headers';
import Link from 'next/link';

export default function Header() {
    const headerList = headers();
    const pathname = headerList.get("x-current-path");
    const isFavoritePath = pathname === '/favorites';

    return (
        <header className={stylesHeader.header}>
            <Link href="/">
                <Image
                    src="/Logo_KaveHome.svg"
                    width={172}
                    height={31}
                    className={stylesHeader.header__khlogo}
                    alt="Kave Home logo"
                />
            </Link>

            {!isFavoritePath &&
                <Link href="/favorites">
                    <Image
                        src="/Favorite_Icon.svg"
                        width={22}
                        height={19}
                        alt="Favorites"
                        className={stylesHeader.header__favoritesLink}
                    />
                </Link>
            }


            {isFavoritePath &&
                <Link href="/favorites">
                    <Image
                        src="/Favorite_Icon_Filled.svg"
                        width={22}
                        height={19}
                        alt="Favorites"
                        className={stylesHeader.header__favoritesLink}
                    />
                </Link>
            }
        </header>
    )
}