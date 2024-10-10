import ProductList from '@/components/product/product-list/product-list';
import { getFeaturedProducts } from '@/services/products';
import style from './home-featured.module.scss';

export default async function HomeFeaturedProducts() {

    const products = await getFeaturedProducts();

    return (
        <section className={style.homeFeturedProducts}>
            <ProductList products={products} hasLoadMoreProductsButton={true} />
        </section>
    )
}
