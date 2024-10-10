import styles from './home-menu.module.scss';

export default function HomeMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <h3 className={`${styles.homeMenu__title} khui-text khui-color-black khui-text--regular khui-text--s khui-text-underline`}>
      {children}
    </h3>
  )
}
