import React, { useState } from "react"
import {
    Theme,
    Drawer,
    Hidden,
    IconButton,
    withStyles,
    WithStyles,
    createStyles,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import HeaderLinks from "./HeaderLinks"

const styles = (theme: Theme) =>
    createStyles({
        menuButton: {
            marginRight: theme.spacing(2),
        },
        drawer: {
            width: "40%",
        },
    })

type Props = WithStyles<typeof styles>

/**
 * You can add additional links here. Icons and the such also go here
 * @param props
 */
function HeaderMenu(props: Props) {
    const { classes } = props
    const [mobileOpen, setMobileOpen] = useState(false)
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    return (
        <>
            <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>

            {/* A drawer is the side-bar that opens. Here, it opens from the right */}
            <Drawer
                variant="temporary"
                classes={{
                    paper: classes.drawer,
                }}
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <HeaderLinks />
            </Drawer>
        </>
    )
}

export default withStyles(styles)(HeaderMenu)
