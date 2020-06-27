import React from "react"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

import BackgroundImage from "gatsby-background-image"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            backgroundPosition: "center center",
            backgroundSize: "cover",
        },
        filter: {
            "&:before": {
                background: "rgba(0, 0, 0, 0.5)",
                zIndex: 0,
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
        content: {
            zIndex: 1,
        },
    })

type Props = WithStyles<typeof styles> & {
    image: GatsbyTypes.BackgroundImageFragment
    children: React.ReactNode
}

function ImageSection(props: Props) {
    const { classes, image, children } = props

    return (
        <BackgroundImage
            className={classes.root}
            fluid={image.childImageSharp?.fluid}
        >
            <div className={classes.filter} />
            <div className={classes.content}>{children}</div>
        </BackgroundImage>
    )
}

export default withStyles(styles)(ImageSection)
