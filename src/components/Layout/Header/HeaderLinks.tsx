import React from "react"
import { Link } from "gatsby"
import {
    Button,
    Theme,
    withStyles,
    WithStyles,
    createStyles,
} from "@material-ui/core"

const styles = (theme: Theme) =>
    createStyles({
        link: {
            margin: theme.spacing(1),
            textDecoration: "none",
            display: "inline-block",
        },
        button: {
            color: theme.palette.text.secondary,
        },
        whiteButton: {
            color: theme.palette.neutral.light,
        },
    })

type Props = WithStyles<typeof styles> & {
    scrollTrigger?: boolean
}

/**
 * You can add additional links here. Icons and the such also go here
 * @param props 
 */
function HeaderLinks(props: Props) {
    const { classes, scrollTrigger = true } = props
    const buttonClassname = scrollTrigger ? classes.button : classes.whiteButton
    return (
        <>
            <Link className={classes.link} to="/">
                <Button className={buttonClassname}>
                    <b>Home</b>
                </Button>
            </Link>
            <Link className={classes.link} to="/about">
                <Button className={buttonClassname}>
                    <b>About</b>
                </Button>
            </Link>
            <Link className={classes.link} to="/events">
                <Button className={buttonClassname}>
                    <b>Events</b>
                </Button>
            </Link>
            <Link className={classes.link} to="/board">
                <Button className={buttonClassname}>
                    <b>Board</b>
                </Button>
            </Link>
            <Link className={classes.link} to="/archive">
                <Button className={buttonClassname}>
                    <b>Archive</b>
                </Button>
            </Link>
            <Link className={classes.link} to="/contact-us">
                <Button className={buttonClassname}>
                    <b>Contact Us</b>
                </Button>
            </Link>
        </>
    )
}

export default withStyles(styles)(HeaderLinks)
