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
        }
    })

type Props = WithStyles<typeof styles> & {
    icon: React.ReactNode
    title: string
    description: string,
}

/**
 * Custom text component that wraps Material-UI typography
 * @param props
 */
function MissionStatementGoal(props: Props) {
    const { classes, icon, title, description, } = props

    return (
        <Grid container spacing={1} wrap="nowrap">
            <Grid item className={classes.icon}>
                {icon}
            </Grid>
            <Grid item>
                <Text variant="h6" color="textSecondary">
                    {title}
                </Text>
                <Text variant="body2">
                    {description}
                </Text>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(MissionStatementGoal)
