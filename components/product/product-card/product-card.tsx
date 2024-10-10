"use client"

import { Product as ProductModel } from "@/models/products";
import styles from './product-card.module.scss';
import { ImageWithFallback } from "../../image-with-fallback/image-with-fallback";
import Image from "next/image";
import Link from "next/link";
import { addProductToFavorites, checkIfFavorite, removeProductFromFavorites } from "@/helpers/addToFavorites";
import { useEffect, useState } from "react";

export default function ProductCard(props: { product: ProductModel }) {

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(checkIfFavorite(props.product.productSku));
    }, [])

    const addToFavorites = (event: any) => {
        event.preventDefault();
        addProductToFavorites(props.product.productSku);
        setIsFavorite(true);
    }

    const removeFromFavorites = (event: any) => {
        event.preventDefault();
        removeProductFromFavorites(props.product.productSku);
        setIsFavorite(false);
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

                {!isFavorite && <button className={styles.product__favoriteBtn} onClick={addToFavorites}>
                    <Image
                        src="/Favorite_Icon.svg"
                        width={22}
                        height={19}
                        alt="Add to Favorites"
                    />
                </button>}

                {isFavorite && <button className={styles.product__favoriteBtn} onClick={removeFromFavorites}>
                    <Image
                        src="/Favorite_Icon_Filled.svg"
                        width={22}
                        height={19}
                        alt="Remove from Favorites"
                    />
                </button>}
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
