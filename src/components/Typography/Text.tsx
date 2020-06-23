import React from "react"
import {
    Typography,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
    withTheme,
} from "@material-ui/core"
import { TypographyProps } from "@material-ui/core/Typography/Typography"

import clsx from "clsx"

const styles = (theme: Theme) => createStyles({
    white: {
        color: theme.palette.neutral.light,
    }
})

type Props = WithStyles<typeof styles> & Omit<TypographyProps, "color"> & {
    color?: TypographyProps["color"] | "white",
}

/**
 * Custom text component that wraps Material-UI typography
 * @param props 
 */
function Text(props: Props) {
    const { classes, color = "initial", ...rest } = props
    const textClassName = clsx({
        [classes.white]: color === "white",
    })

    return <Typography className={textClassName} color={color === "white" ? "initial" : color} {...rest}/>
}

export default withStyles(styles)(Text)
