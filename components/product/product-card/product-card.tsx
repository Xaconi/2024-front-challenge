"use client"

import { Product as ProductModel } from "@/models/products";
import styles from './product-card.module.scss';
import { ImageWithFallback } from "../../image-with-fallback/image-with-fallback";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard(props: { product: ProductModel }) {

    const addToFavorites = (event: any) => {
        event.preventDefault();
        console.log(`ADD ${props.product.productSku} TO FAVORITES`)
    }

    return (
        <Link className={styles.product} href="#">
            <div className={styles.product__imgWrapper}>
                <ImageWithFallback
                    src={props.product.productImageUrl}
                    width={385}
                    height={267}
                    className={styles.product__img}
                    alt={props.product.productName}
                    fallback="/Product.webp"
                />

                <button className={styles.product__favoriteBtn} onClick={addToFavorites}>
                    <Image
                        src="/Favorite_Icon.svg"
                        width={22}
                        height={19}
                        alt="Add to Favorites"
                    />
                </button>
            </div>

            <h3 className={`${styles.product__title} khui-text khui-text--bold khui-text--xm khui-color-dark-grey`}>
                {props.product.productName}
            </h3>

            <h4 className={`${styles.product__title} khui-text khui-text--xm khui-color-dark-grey`}>
                {props.product.productPrice}€
            </h4>
        </Link>
    )
}
