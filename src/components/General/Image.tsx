import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import Img from "gatsby-image"

import type { ImageType } from "hooks/useEvents"
import type { BioImageType } from "hooks/useBios"

type Props = {
    className?: string,
    image: ImageType | BioImageType,
}

function Image(props: Props) {
    const { image, className } = props;
    if (!image.childImageSharp?.fluid) {
        throw new Error("Couldn't load image.")
    }

    return className ?
        <Img className={className} fluid={image.childImageSharp.fluid} />
        : <Img fluid={image.childImageSharp.fluid} />
}

export default Image