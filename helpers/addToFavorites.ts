const LOCAL_STORAGE_KEY = 'favorites'

export function addProductToFavorites(productSku: string) {
    const currentFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    currentFavorites.push(productSku);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentFavorites));
}

export function removeProductFromFavorites(productSku: string) {
    let currentFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    currentFavorites = currentFavorites.filter(product => product !== productSku);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentFavorites));
}

export function checkIfFavorite(productSku: string) {
    const currentFavorites = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    return currentFavorites.findIndex(product => product === productSku) !== -1;
}