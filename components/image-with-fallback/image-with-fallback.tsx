import Image from "next/image"
import { useEffect, useState } from "react"

export const ImageWithFallback = (props: {
    fallback: string,
    alt: string,
    src: string,
    width: number,
    height: number,
    className: string
}) => {
    const [error, setError] = useState(false)

    useEffect(() => {
        setError(false)
    }, [props.src])

    return (
        <Image
            alt={props.alt}
            width={props.width}
            height={props.height}
            className={props.className}
            onError={() => setError(true)}
            src={error ? props.fallback : props.src}
        />
    )
}
