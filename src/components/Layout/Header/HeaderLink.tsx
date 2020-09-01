import React, { useState } from "react"
import { Link } from "gatsby"
import {
    Theme,
    Hidden,
    withStyles,
    WithStyles,
    createStyles,
} from "@material-ui/core"
import { animated, useTransition } from "react-spring"

const styles = (theme: Theme) =>
    createStyles({
        link: {
            margin: theme.spacing(2),
            textDecoration: "none",
            textTransform: "uppercase",
            display: "inline-block",
            position: "relative",
            color: (props: Props) =>
                props.scrollTrigger
                    ? theme.palette.text.secondary
                    : theme.palette.neutral.light,
        },
        active: {
            "& #link-highlight": {
                backgroundColor: (props: Props) =>
                    props.scrollTrigger
                        ? theme.palette.text.secondary
                        : theme.palette.neutral.light,
                position: "absolute",
                bottom: -theme.spacing(0.5),
                width: "100%",
                height: "3px",
            },
        },
        box: {
            backgroundColor: (props: Props) =>
                props.scrollTrigger
                    ? theme.palette.text.secondary
                    : theme.palette.neutral.light,
            position: "absolute",
            bottom: -theme.spacing(0.5),
            height: "3px",
        },
    })

type Props = WithStyles<typeof styles> & {
    scrollTrigger?: boolean
    to: string
    text: string
}

/**
 * You can add additional links here. Icons and the such also go here
 * @param props
 */
function HeaderLink(props: Props) {
    const { classes, scrollTrigger = true, to, text } = props

    const [show, setShow] = useState(false)
    const transition = useTransition(show, null, {
        from: { width: "0%", left: "0%" },
        enter: { width: "100%", left: "0%" },
        leave: { width: "0%", left: "100%" },
    })

    return (
        <Link
            className={classes.link}
            to={to}
            activeClassName={classes.active}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <b>{text}</b>
            <Hidden xsDown>
                {transition.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div
                                key={key}
                                className={classes.box}
                                style={props}
                            />
                        )
                )}
                <div id="link-highlight" />
            </Hidden>
        </Link>
    )
}

export default withStyles(styles)(HeaderLink)
