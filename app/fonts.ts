import { Noto_Serif, Poppins } from 'next/font/google'

export const notoSerifFont = Noto_Serif({
    weight: "400",
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-noto-serif",
})

export const poppinsFont = Poppins({
    weight: ["700", "400"],
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-poppins",
})