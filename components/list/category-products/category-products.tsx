import ProductList from '@/components/product/product-list/product-list';
import { getFeaturedProducts } from '@/services/products';
import style from './category-products.module.scss';

export default async function CategoryProducts() {

    const products = await getFeaturedProducts();

    return (
        <section className={style.categoryProducts}>
            <ProductList products={products} hasPaginator={true} />
        </section>
    )
}
