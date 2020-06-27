import React from "react"
import {
    Container,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { ContainerProps } from "@material-ui/core/Container"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(8),
        },
    })

type Props = WithStyles<typeof styles> & {
    maxWidth?: ContainerProps["maxWidth"]
    children: React.ReactNode
}

function Section(props: Props) {
    const { classes, maxWidth = "md", children } = props

    return (
        <Container maxWidth={maxWidth} className={classes.root}>
            <>{children}</>
        </Container>
    )
}

export default withStyles(styles)(Section)
