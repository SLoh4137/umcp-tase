import React, { useState } from "react"
import { Link } from "gatsby"
import {
    AppBar,
    Hidden,
    Theme,
    Toolbar,
    withStyles,
    WithStyles,
    createStyles,
    useScrollTrigger,
} from "@material-ui/core"

// Page Components
import Logo from "components/Logo/Logo"
import HeaderLinks from "./HeaderLinks"
import HeaderMenu from "./HeaderMenu"

// Some example styles for the header
const styles = (theme: Theme) =>
    createStyles({
        link: {
            margin: theme.spacing(1),
            textDecoration: "none",
            display: "inline-block",
        },
        title: {
            color: "#ffffff",
            margin: theme.spacing(1),
            marginLeft: theme.spacing(2),
            display: "inline",
            textTransform: "uppercase",
            verticalAlign: "middle",
            // fontFamily: "Passion One, cursive",
            fontSize: "24px",
            [theme.breakpoints.down("sm")]: {
                fontSize: "18px",
            },
        },
        grow: {
            flexGrow: 1,
        },
    })

type ComponentProps = {
    title: string
    scrollTrigger?: boolean
}

type Props = WithStyles<typeof styles> & ComponentProps

/* Note, the header currently stays at the top of the page instead of the top of the screen
 * This can be changed by setting AppBar position="fixed".
 * Also, we can make the header respond to scrolling by utilizing the scrollTrigger prop
 * as shown in the commented out opacity example
 */
function Header(props: Props) {
    const { classes, title } = props

    return (
        <AppBar className={classes.grow} position={"fixed"} elevation={0}>
            <Toolbar>
                <Link className={classes.link} to="/">
                    <Logo />
                    <h2 className={classes.title}>{title}</h2>
                </Link>
                <div className={classes.grow} />
                {/* This is here to make sure everything else is right-aligned*/}
                <Hidden xsDown>
                    {/* Hidden is a component that lets us hide or show things depending on the size of the screen*/}
                    <HeaderLinks />
                </Hidden>
                <Hidden smUp>
                    <HeaderMenu />
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Header)
