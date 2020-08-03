/**
 * Code from https://joshwcomeau.com/react/the-perils-of-rehydration/
 * Allows for two-pass rendering for dynamic content that won't exist
 * in the first pass of server side rendering
 */

import React, { useState, useEffect } from "react"

type Props = {
    children: React.ReactNode
}

function ClientOnly(props: Props) {
    const { children, ...delegated } = props
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if (!hasMounted) return null

    return <div {...delegated}>{children}</div>
}

export default ClientOnly
