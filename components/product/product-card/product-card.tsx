"use client"

import { Product as ProductModel } from "@/models/products";
import styles from './product-card.module.scss';
import { ImageWithFallback } from "../../image-with-fallback/image-with-fallback";
import Link from "next/link";
import AddToFavoritesBtn from "../add-to-favorites-btn/add-to-favorites-btn";

export default function ProductCard(props: { product: ProductModel }) {

    return (
        <Link className={styles.product} href={`/product/${props.product.productSku}`}>
            <div className={styles.product__imgWrapper}>
                <ImageWithFallback
                    src={props.product.productImageUrl}
                    width={385}
                    height={267}
                    className={styles.product__img}
                    alt={props.product.productName}
                    fallback="/Product.webp"
                />

                <AddToFavoritesBtn
                    product={props.product}
                    className={styles.product__favoriteBtn}
                />
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
