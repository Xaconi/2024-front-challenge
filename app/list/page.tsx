import styles from "./page.module.scss";
import "../khui.scss";
import CategoryProducts from "@/components/list/category-products/category-products";
import { Metadata } from "next";

export default function List() {

  return (
    <section className={styles.list}>
      <h1 className={`${styles.list__title} khui-text-center khui-title khui-color-dark-grey khui-title--xl`}>
        Productos
      </h1>

      <h2 className={`${styles.list__subtitle} khui-text-center khui-title khui-color-dark-grey khui-title--s`}>
        Lorem ipsum dolor sit amet.
      </h2>

      <CategoryProducts />
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Listado de productos | Kave Home',
  }
}
