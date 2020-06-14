import React from "react"
import {
    AppBar,
    Grid,
    IconButton,
    withStyles,
    Toolbar,
    createStyles,
    Theme,
    WithStyles,
} from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import { config } from "root/site-config"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            padding: theme.spacing(1),
            paddingRight: theme.spacing(2),
        },
        grow: {
            flexGrow: 1,
        },
        copyright: {
            marginLeft: theme.spacing(3),
            color: theme.palette.primary.main,
        },
    })

type Props = WithStyles<typeof styles>

function Footer(props: Props) {
    const { classes } = props
    return (
        <AppBar
            position={"relative"}
            color={"transparent"}
            elevation={0}
            className={classes.root}
        >
            <Toolbar>
                <div className={classes.grow} />

                <IconButton href={config.facebookLink} color="primary">
                    <FacebookIcon />
                </IconButton>

                <IconButton href={config.instagramLink} color="primary">
                    <InstagramIcon />
                </IconButton>

                <h4 className={classes.copyright}>{config.copyright}</h4>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles, { name: "footer-test" })(Footer)
