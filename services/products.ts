import { getFavorites } from "@/helpers/favorites";
import { Product, ProductsResult } from "@/models/products";

export async function getFeaturedProducts(): Promise<Array<Product>> {
    const response = await fetch('https://kavehome.com/nfeeds/es/es/templatebuilder/20220701', { next: { revalidate: 10 } });
    if (!response.ok) {
        throw new Error('Fallo en la obtención de productos');
    }
    const products: ProductsResult = await response.json();
    return products.results;
}

export async function getListProducts(): Promise<Array<Product>> {
    const response = await fetch('https://kavehome.com/nfeeds/es/es/templatebuilder/20220701', { next: { revalidate: 10 } });
    if (!response.ok) {
        throw new Error('Fallo en la obtención de productos');
    }
    const products: ProductsResult = await response.json();
    return products.results;
}

export function getFavoriteProducts(): Array<Product> {
    const favoriteProducts = getFavorites();
    return favoriteProducts;
}
