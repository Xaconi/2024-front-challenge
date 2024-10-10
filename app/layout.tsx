// Core
import type { Metadata } from "next";

// CSS
import "./reset.css";
import "./globals.css";
import "./khui.scss";
import Header from "@/components/header/header";

import { poppinsFont, notoSerifFont } from "./fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppinsFont.variable} ${notoSerifFont.variable}`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
