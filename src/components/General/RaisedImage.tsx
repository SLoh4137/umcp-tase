import React from "react"
import { graphql } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"
import Img from "gatsby-image"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[3],
        },
    })

type Props = WithStyles<typeof styles> & {
    image: GatsbyTypes.Maybe<GatsbyTypes.RaisedImageFragment>
    name?: string
}

function ImageSection(props: Props) {
    const { classes, image, name = "Raised image" } = props
    if (!image) throw new Error(`${name} does not exist`)

    return (
        <Img
            className={classes.root}
            fluid={image.childImageSharp?.fluid}
            alt={name}
        />
    )
}

export default withStyles(styles)(ImageSection)

export const raisedImageQueryFragment = graphql`
    fragment RaisedImage on File {
        childImageSharp {
            fluid(quality: 100, pngQuality: 100, maxHeight: 1000) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`
