"use client"

import { Product as ProductModel } from "@/models/products";
import Image from "next/image";
import useFavorites from '../../../hooks/useFavorites';

export default function AddToFavoritesBtn(props: { className: string, product: ProductModel }) {

    const { addToFavorites, removeFromFavorites, checkIsFavorite } = useFavorites(props.product);

    const addProductToFavorites = (event: any) => {
        event.preventDefault();
        addToFavorites(props.product);
    }

    const removeProductFromFavorites = (event: any) => {
        event.preventDefault();
        removeFromFavorites(props.product);
    }

    return (
        <>
            {!checkIsFavorite() && <button className={props.className} onClick={addProductToFavorites}>
                <Image
                    src="/Favorite_Icon.svg"
                    width={22}
                    height={19}
                    alt="Add to Favorites"
                />
            </button>}

            {checkIsFavorite() && <button className={props.className} onClick={removeProductFromFavorites}>
                <Image
                    src="/Favorite_Icon_Filled.svg"
                    width={22}
                    height={19}
                    alt="Remove from Favorites"
                />
            </button>}
        </>
    )
}
