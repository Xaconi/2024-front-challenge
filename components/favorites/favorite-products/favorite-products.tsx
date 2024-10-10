"use client"

import ProductList from '@/components/product/product-list/product-list';
import { getFavoriteProducts } from '@/services/products';
import style from './favorite-products.module.scss';
import { useEffect, useState } from 'react';
import { Product } from '@/models/products';

export default function FavoriteProducts() {

    const [products, setProducts] = useState<Array<Product>>([]);

    useEffect(() => {
        const favoriteProducts = getFavoriteProducts();
        setProducts(favoriteProducts);
    }, []);

    return (
        <>
            {products.length > 0 && <section className={style.categoryProducts}>
                <ProductList products={products} hasPaginator={true} />
            </section>}
        </>
    )
}
