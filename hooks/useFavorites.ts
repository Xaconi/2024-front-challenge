import { addProductToFavorites, checkIfFavorite, removeProductFromFavorites } from "@/helpers/favorites";
import { Product } from "@/models/products";
import { useEffect, useState } from "react";

const useFavorites = (product: Product) => {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        setIsFavorite(checkIfFavorite(product.productSku));
    }, []);


    const addToFavorites = (product: Product) => {
        addProductToFavorites(product)
        setIsFavorite(true);
    };

    const removeFromFavorites = (product: Product) => {
        removeProductFromFavorites(product);
        setIsFavorite(false);
    };

    const checkIsFavorite = () => {
        return isFavorite;
    };

    return {
        addToFavorites,
        removeFromFavorites,
        checkIsFavorite
    };
};

export default useFavorites;
