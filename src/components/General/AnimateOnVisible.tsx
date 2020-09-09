import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"
import { useSpring, animated as a } from "react-spring"

import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

type Props = {
    animated?: boolean
    once?: boolean
    partialVisibility?: boolean
    children:
        | React.ReactNode
        | React.ReactNodeArray
        | ((
              args: React.CSSProperties
          ) => React.ReactNode | React.ReactNodeArray)
}

export default (props: Props) => {
    const {
        animated = true,
        once = false,
        partialVisibility = false,
        children,
    } = props
    const [isVisible, setVisible] = useState(false)
    const springStyle = useSpring({
        to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0px)" : "translateY(-10px)",
        },
        immediate: !animated || usePrefersReducedMotion(),
    })

    return (
        <VisibilitySensor
            onChange={(isVisible) => setVisible(isVisible)}
            partialVisibility={partialVisibility}
            active={!once || !isVisible}
        >
            {children instanceof Function ? (
                children(springStyle)
            ) : (
                <a.div style={springStyle}>{children}</a.div>
            )}
        </VisibilitySensor>
    )
}
