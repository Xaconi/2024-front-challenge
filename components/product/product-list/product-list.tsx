"use client"

import { Product as ProductModel } from "@/models/products";
import { useState } from "react";
import ProductCard from "../product-card/product-card";
import Button from "@/components/button/button";
import style from './product-list.module.scss'

const DEFAULT_PRODUCTS_SIZE = 24;

export default function ProductList(props: { products: Array<ProductModel>, hasLoadMoreProductsButton?: boolean }) {

    const [productsNumber, setProductsNumber] = useState(DEFAULT_PRODUCTS_SIZE);
    const [isLoading, setIsLoading] = useState(false);

    const showAllProducts = () => {
        setIsLoading(true);
        setTimeout(() => setProductsNumber(props.products.length), 100);
    }

    return (
        <section className={style.productList}>
            <div className={style.productList__products}>
                {props.products.slice(0, productsNumber).map(product => (
                    <ProductCard key={product.productSku} product={product} />
                ))}
            </div>

            {props.hasLoadMoreProductsButton &&
                <Button text={isLoading ? 'Cargando...' : 'Ver todos los productos'} click={showAllProducts} />
            }
        </section>
    )
}
