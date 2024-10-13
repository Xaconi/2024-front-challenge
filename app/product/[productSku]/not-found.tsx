import Image from "next/image";
import '../../khui.scss'
import styles from "./not-found.module.scss";

export default async function NotFound() {

    return (
        <section className={styles.notFound}>
            <h1 className="khui-text khui-text--l khui-text-center">
                404 - Página no encontrada
            </h1>

            <Image
                src="/PageNotFound.webp"
                width={713}
                height={482}
                alt="404 - Página no encontrada"
                className={styles.notFound__img}
            />
        </section>
    );
}
