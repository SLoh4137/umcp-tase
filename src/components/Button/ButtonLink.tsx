import React from "react"
import { Link } from "gatsby"
import {
    Button,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { ButtonProps } from "@material-ui/core/Button"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            textDecoration: "none",
        },
    })

type Props = WithStyles<typeof styles> &
    ButtonProps & {
        to: string
    }

/**
 * Custom text component that wraps Material-UI typography
 * @param props
 */
function ButtonLink(props: Props) {
    const { classes, to, children, ...rest } = props

    return (
        <Link className={classes.root} to={to}>
            <Button {...rest}>{children}</Button>
        </Link>
    )
}

export default withStyles(styles)(ButtonLink)
