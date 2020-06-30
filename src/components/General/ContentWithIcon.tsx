import React from "react"
import {
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        icon: {
            color: theme.palette.primary.main,
        },
    })

type Props = WithStyles<typeof styles> & {
    icon: React.ReactNode
    title: string
    description?: string
    children?: React.ReactNode
    className?: string
}

/**
 * Custom text component that wraps Material-UI typography
 * @param props
 */
function ContentWithIcon(props: Props) {
    const {
        classes,
        className = "",
        icon,
        title,
        description,
        children,
    } = props

    return (
        <Grid container spacing={1} wrap="nowrap" className={className}>
            <Grid item className={classes.icon}>
                {icon}
            </Grid>
            <Grid item>
                <Text variant="h6" color="textSecondary">
                    {title}
                </Text>
                {description ? (
                    <Text variant="body2">{description}</Text>
                ) : (
                    <></>
                )}
                {children}
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(ContentWithIcon)
