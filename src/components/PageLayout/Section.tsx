import React from "react"
import {
    Container,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { ContainerProps } from "@material-ui/core/Container"

import Text, { TextColorOptions } from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(2),
        },
        title: {
            //color: "#3C4858",
            margin: "1.75rem 0 0.875rem",
            textDecoration: "none",
            fontWeight: 700,
            // fontFamily: `Roboto Slab, Times New Roman, serif`,
        },
    })

type Props = WithStyles<typeof styles> &
    TextColorOptions & {
        maxWidth?: ContainerProps["maxWidth"]
        title?: string
        children: React.ReactNode
    }

function Section(props: Props) {
    const {
        classes,
        maxWidth = "md",
        title,
        color = "textSecondary",
        children,
    } = props

    return (
        <Container maxWidth={maxWidth} className={classes.root}>
            <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
                spacing={3}
            >
                {title ? (
                    <Text
                        variant="h3"
                        color={color}
                        align="center"
                        className={classes.title}
                    >
                        {title}
                    </Text>
                ) : (
                    <></>
                )}
                {children}
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(Section)