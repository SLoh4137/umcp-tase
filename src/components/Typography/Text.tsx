import React from "react"
import {
    Typography,
    TypographyProps,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

import clsx from "clsx"

const styles = (theme: Theme) =>
    createStyles({
        white: {
            color: "#ffffff",
        },
        success: {
            color: theme.palette.success.main,
        },
    })

export interface TextColorOptions {
    color?: TypographyProps["color"] | "white" | "success"
    className?: string
}

type Props = WithStyles<typeof styles> &
    Omit<TypographyProps, "color"> &
    TextColorOptions

/**
 * Custom text component that wraps Material-UI typography
 * @param props
 */
function Text(props: Props) {
    const { classes, className = "", color = "initial", ...rest } = props
    const textClassName = clsx({
        [className]: true,
        [classes.white]: color === "white",
        [classes.success]: color === "success",
    })

    return (
        <Typography
            className={textClassName}
            // @ts-ignore The case of invalid color names is handled but not recognized by Typescript
            color={textClassName === className ? color : "initial"}
            {...rest}
        />
    )
}

export default withStyles(styles)(Text)
