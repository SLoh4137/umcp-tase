import React from "react"
import {
    Theme,
    withStyles,
    WithStyles,
    createStyles,
} from "@material-ui/core"
import clsx from "clsx"

const styles = (theme: Theme) =>
    createStyles({
        main: {
            background: "#FFFFFF",
            position: "relative",
            zIndex: 3,
        },
        mainRaised: {
            margin: "-60px 30px 0px",
            borderRadius: "6px",
            boxShadow:
                "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        },
    })

type Props = WithStyles<typeof styles> & {
    children: React.ReactNode
}

function PageContent(props: Props) {
    const { classes, children } = props
    return (
        <div className={clsx(classes.main, classes.mainRaised)}>
            {children}
        </div>
    )
}

export default withStyles(styles)(PageContent)
