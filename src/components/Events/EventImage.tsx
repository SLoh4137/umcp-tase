import React from "react"
import Img from "gatsby-image"

import type { ImageType } from "hooks/useEvents"

type Props = {
    image: ImageType
}

function EventImage(props: Props) {
    const { image } = props;
    if (!image.childImageSharp?.fluid) {
        console.log("Couldn't load image.")
    }
    return (
        <Img fluid={image.childImageSharp?.fluid} />
    );
}

export default EventImage