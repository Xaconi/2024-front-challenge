import { Product, ProductsResult } from "@/models/products";

export async function getFeaturedProducts(): Promise<Array<Product>> {
    const response = await fetch('https://kavehome.com/nfeeds/es/es/templatebuilder/20220701', { next: { revalidate: 10 } });
    if (!response.ok) {
        throw new Error('Fallo en la obtención de productos');
    }
    const products: ProductsResult = await response.json();
    return products.results;
}
