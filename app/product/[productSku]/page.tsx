import styles from "./page.module.scss";
import "../../khui.scss";
import { getProductDetail } from "@/services/products";
import Image from "next/image";
import AddToFavoritesBtn from "@/components/product/add-to-favorites-btn/add-to-favorites-btn";

export default async function Product({ params }: { params: { productSku: string } }) {

  const product = await getProductDetail(params.productSku);

  return (
    <section className={styles.product}>
      <div className={styles.product__visual}>
        <Image
          src={'/ProductDetail.webp'}
          width={882}
          height={960}
          alt={product.productName}
          className={styles.product__img}
        />

        <AddToFavoritesBtn product={product} className={styles.product__favoriteBtn} />
      </div>

      <div className={styles.product__info}>
        <h1 className={`khui-text khui-color-black khui-text--l`}>
          {product.productName}
        </h1>

        <h2 className={`${styles.product__subtitle} khui-text khui-color-light-grey khui-text--sm`}>
          {product.productCategoryHierarchy}
        </h2>

        <h3 className={styles.product__price}>
          {product.productPrice}
          <span className={styles.product__priceCurrency}>€</span>
        </h3>

        <p className={`khui-text khui-color-black khui-text--sm`}>
          {product.productName} - {product.productAssemblyDescription} - {product.productUsage}
        </p>
      </div>
    </section>
  );
}
