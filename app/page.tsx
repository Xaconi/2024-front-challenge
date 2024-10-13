import styles from "./page.module.scss";
import "./khui.scss";
import HomeMenu from "@/components/home/home-menu/home-menu";
import HomeSection from "@/components/home/home-section/home-section";
import HomeFeaturedProducts from "@/components/home/home-featured-products/home-featured-products";
import HomePresentation from "@/components/home/home-presentation/home-presentation";
import { Metadata } from "next";

export default function Home() {

  return (
    <section className={styles.home}>
      <HomePresentation />

      <section className={styles.homeSections}>
        <h2 className={`${styles.homeSections__title} khui-text-center khui-title khui-color-dark-grey khui-title--l`}>
          Inspírate
        </h2>

        <div className={styles.homeMenu}>
          <HomeMenu> Estancias </HomeMenu>
          <HomeMenu> Estil </HomeMenu>
          <HomeMenu> Muebles </HomeMenu>
          <HomeMenu> Decoración </HomeMenu>
          <HomeMenu> We are Kave </HomeMenu>
          <HomeMenu> Proyectos </HomeMenu>
        </div>

        <div className={styles.homeSubsectionsWrapper}>
          <div className={styles.homeSubsections}>
            <HomeSection title="We are Kave" link="/list" img="/Subsection.webp" />
            <HomeSection title="Estancias" link="/list" img="/Subsection.webp" />
            <HomeSection title="Muebles" link="/list" img="/Subsection.webp" />
            <HomeSection title="Decoración" link="/list" img="/Subsection.webp" />
            <HomeSection title="Proyectos" link="/list" img="/Subsection.webp" />
            <HomeSection title="Estilos" link="/list" img="/Subsection.webp" />
          </div>
        </div>

        <HomeFeaturedProducts />
      </section>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'KaveHome.com - Muebles y decoración | Kave Home',
  }
}
