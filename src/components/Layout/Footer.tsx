import React from "react"
import {
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
            top: "auto",
            bottom: 0,
            padding: theme.spacing(1),
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
        <Toolbar className={classes.root}>
            <div className={classes.grow} />

            <IconButton href={config.facebookLink} color="primary">
                <FacebookIcon />
            </IconButton>

            <IconButton href={config.instagramLink} color="primary">
                <InstagramIcon />
            </IconButton>

            <h4 className={classes.copyright}>{config.copyright}</h4>
        </Toolbar>
    )
}

export default withStyles(styles)(Footer)
