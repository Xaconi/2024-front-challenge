import { Product } from "@/models/products";

const LOCAL_STORAGE_KEY = 'favorites'

export function addProductToFavorites(product: Product) {
    const currentFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    currentFavorites.push(product);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentFavorites));
}

export function removeProductFromFavorites(newProduct: Product) {
    let currentFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    currentFavorites = currentFavorites.filter(product => product.productSku !== newProduct.productSku);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentFavorites));
}

export function checkIfFavorite(productSku: string) {
    const currentFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    return currentFavorites.findIndex(product => product.productSku === productSku) !== -1;
}

export function getFavorites() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}