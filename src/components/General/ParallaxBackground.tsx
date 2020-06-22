/**
 * Inspired by
 * https://github.com/creativetimofficial/material-kit-react/blob/master/src/components/Parallax/Parallax.js
 */

import React from "react"
import { graphql } from "gatsby"
import { Theme, withStyles, WithStyles, createStyles } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"

import useParallax from "hooks/useParallax"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            height: "80vh",
            //maxHeight: "1000px",
            overflow: "hidden",
            position: "relative",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            margin: "0",
            padding: "0",
            border: "0",
            display: "flex",
            alignItems: "center",
        },
        filter: {
            "&:before": {
                background: "rgba(0, 0, 0, 0.5)",
            },
            "&:after,&:before": {
                position: "absolute",
                zIndex: 0,
                width: "100%",
                height: "100%",
                display: "block",
                left: "0",
                top: "0",
                content: "''",
            },
        },
        raised: {
            zIndex: 1,
            width: "100%",
            height: "100%",
            margin: "auto",
        },
    })

type Props = WithStyles<typeof styles> & {
    image: GatsbyTypes.BackgroundImageFragment
    children: React.ReactNode
}

function ParallaxBackground(props: Props) {
    const { classes, image, children } = props
    const { transform } = useParallax()
    return (
        <BackgroundImage
            className={classes.root}
            fluid={image.childImageSharp?.fluid}
            style={{ transform: transform }}
        >
            <div className={classes.filter} />
            <div className={classes.raised}>{children}</div>
        </BackgroundImage>
    )
}

export default withStyles(styles)(ParallaxBackground)

export const imageQueryFragment = graphql`
    fragment BackgroundImage on File {
        childImageSharp {
            fluid(quality: 100, pngQuality: 100, maxHeight: 1000) {
                ...GatsbyImageSharpFluid
                ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
    }
`
