"use client"

import { Product, Product as ProductModel } from "@/models/products";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../product-card/product-card";
import Button from "@/components/button/button";
import style from './product-list.module.scss'
import Paginator from "@/components/paginator/paginator";

const DEFAULT_PRODUCTS_SIZE = 24;
const MAX_PAGES = 8;

export default function ProductList(props: { products: Array<ProductModel>, hasLoadMoreProductsButton?: boolean, hasPaginator?: boolean }) {

    const [productsNumber, setProductsNumber] = useState(DEFAULT_PRODUCTS_SIZE);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const originalProducts = useRef<Array<Product>>([]);
    const showedProducts = useRef<Array<Product>>(props.products.slice(DEFAULT_PRODUCTS_SIZE * currentPage, DEFAULT_PRODUCTS_SIZE));

    const showAllProducts = () => {
        setIsLoading(true);
        setTimeout(() => setProductsNumber(props.products.length), 100);
    }

    const goToPage = (page: number) => {
        setCurrentPage(page);
    }

    useEffect(() => {
        const currentIndex = DEFAULT_PRODUCTS_SIZE * currentPage;
        originalProducts.current = props.products;
        showedProducts.current = props.products.slice(currentIndex, (currentIndex) + DEFAULT_PRODUCTS_SIZE);
    }, [currentPage])

    return (
        <section className={style.productList}>
            <div className={style.productList__products}>
                {showedProducts.current.map(product => (
                    <ProductCard key={product.productSku} product={product} />
                ))}
            </div>

            {props.hasLoadMoreProductsButton &&
                <Button text={isLoading ? 'Cargando...' : 'Ver todos los productos'} click={showAllProducts} />
            }

            {props.hasPaginator &&
                <Paginator currentPage={currentPage} pageLimit={MAX_PAGES} maxPage={props.products.length / DEFAULT_PRODUCTS_SIZE} goToPage={goToPage} />
            }
        </section>
    )
}
