/**
 * Inspired by 
 * https://github.com/creativetimofficial/material-kit-react/blob/master/src/components/Parallax/Parallax.js
 */

import React, { useState, useEffect } from "react"
import { FluidObject } from "gatsby-image"
import { animated, useSpring } from "react-spring"
import { Theme, withStyles, WithStyles, createStyles } from "@material-ui/core"
import BackgroundImage from "gatsby-background-image"

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
            background: "rgba(0, 0, 0, 0.5)"
        },
    })

type Props = WithStyles<typeof styles> & {
    fluid: FluidObject
    children: React.ReactNode
}

function ParallaxBackground(props: Props) {
    const { classes, fluid, children } = props
    return (
        <BackgroundImage className={classes.root} fluid={fluid}>
            {children}
        </BackgroundImage>
    )
}

export default withStyles(styles)(ParallaxBackground)
