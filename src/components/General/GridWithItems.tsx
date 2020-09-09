import React from "react"
import {
    Grid,
    GridProps,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import AnimateOnVisible from "components/General/AnimateOnVisible"

const styles = (theme: Theme) =>
    createStyles({
        item: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    })

export interface GridWithItemsProps extends GridProps {}

type Props = WithStyles<typeof styles> &
    GridWithItemsProps & {
        children: React.ReactNodeArray
        animated?: boolean
    }

/**
 * Component that displays items in a grid.
 * @param props
 */
function GridWithItems(props: Props) {
    const {
        classes,
        children,
        xs = 12,
        sm = 4,
        md = false,
        lg = false,
        xl = false,
        spacing = 3,
        alignItems = "stretch",
        alignContent = "stretch",
        justify = "center",
        animated = true,
        ...rest
    } = props

    return (
        <Grid
            container
            spacing={spacing}
            alignItems={alignItems}
            alignContent={alignContent}
            justify={justify}
            {...rest}
        >
            {children.map((child, index) => (
                <Grid
                    item
                    className={classes.item}
                    xs={xs}
                    sm={sm}
                    md={md}
                    lg={lg}
                    xl={xl}
                    key={`animated-grid-${index}`}
                >
                    <AnimateOnVisible
                        animated={animated}
                        partialVisibility
                        once
                    >
                        {child}
                    </AnimateOnVisible>
                </Grid>
            ))}
        </Grid>
    )
}

export default withStyles(styles)(GridWithItems)
