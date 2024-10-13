import styles from "./page.module.scss";
import "../khui.scss";
import FavoriteProducts from "@/components/favorites/favorite-products/favorite-products";
import { Metadata } from "next";

export default function Favorites() {

  return (
    <section className={styles.favorites}>
      <h1 className={`${styles.favorites__title} khui-text-center khui-title khui-color-dark-grey khui-title--xl`}>
        Lista de Favoritos
      </h1>

      <h2 className={`${styles.favorites__subtitle} khui-text-center khui-title khui-color-dark-grey khui-title--s`}>
        Lorem ipsum dolor sit amet.
      </h2>

      <FavoriteProducts />
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Productos favoritos | Kave Home',
  }
}

