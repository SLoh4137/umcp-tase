/**
 * Inspired by
 * https://github.com/creativetimofficial/material-kit-react/blob/master/src/components/Parallax/Parallax.js
 */

import React from "react"
import { FluidObject } from "gatsby-image"
import { Theme, withStyles, WithStyles, createStyles } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"

import useParallax from "hooks/useParallax"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            height: "90vh",
            maxHeight: "1000px",
            overflow: "hidden",
            position: "relative",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            margin: "0",
            padding: "0",
            border: "0",
            display: "flex",
            alignItems: "center",
            background: "rgba(0, 0, 0, 0.5)",
        },
    })

type Props = WithStyles<typeof styles> & {
    fluid: FluidObject
    children: React.ReactNode
}

function ParallaxBackground(props: Props) {
    const { classes, fluid, children } = props
    const { transform } = useParallax()
    return (
        <BackgroundImage
            className={classes.root}
            fluid={fluid}
            style={{ transform: transform }}
        >
            {children}
        </BackgroundImage>
    )
}

export default withStyles(styles)(ParallaxBackground)
