import { useState, useEffect } from "react"

const widthLimit = 768

export default function useParallax() {
    const windowScrollTop =
        window.innerWidth >= widthLimit ? window.pageYOffset / 3 : 0
    const [transform, setTransform] = useState(
        `translate3d(0,${windowScrollTop}px,0)`
    )

    const resetTransform = () => {
        setTransform(`translate3d(0,${window.pageYOffset / 3}px,0)`)
    }

    useEffect(() => {
        if (window.innerWidth >= widthLimit) {
            window.addEventListener("scroll", resetTransform)
        }

        return function cleanup() {
            if (window.innerWidth >= widthLimit) {
                window.removeEventListener("scroll", resetTransform)
            }
        }
    }, [])

    return {
        transform,
    }
}
