/**
 * Inspired by
 * https://github.com/creativetimofficial/material-kit-react/blob/master/src/components/Parallax/Parallax.js
 */

import React from "react"
import { graphql } from "gatsby"
import {
    Grid,
    Theme,
    withStyles,
    WithStyles,
    createStyles,
} from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"

import useParallax from "hooks/useParallax"

type StyleProps = {
    imageHeight?: string,
}

const styles = (theme: Theme) =>
    createStyles({
        root: {
            height: (props: StyleProps) => props.imageHeight ? props.imageHeight : "80vh",
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
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: -1,
        },
        raised: {
            zIndex: 1,
            width: "100%",
            height: "100%",
            margin: "auto",
            textAlign: "center",
        },
    })

type Props = WithStyles<typeof styles> & StyleProps & {
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
            loading="eager"
        >
            <div className={classes.filter} />
            <Grid
                className={classes.raised}
                container
                alignItems="center"
                justify="center"
            >
                <Grid item xs={12}>{children}</Grid>
            </Grid>
        </BackgroundImage>
    )
}

export default withStyles(styles)(ParallaxBackground)

export const imageQueryFragment = graphql`
    fragment BackgroundImage on File {
        childImageSharp {
            fluid(quality: 100, pngQuality: 100, maxHeight: 1000) {
                ...GatsbyImageSharpFluid_withWebp
                ...GatsbyImageSharpFluidLimitPresentationSize
            }
        }
    }
`
