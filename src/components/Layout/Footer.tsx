import React from "react";
import { AppBar, IconButton, withStyles, Toolbar, createStyles, Theme, WithStyles } from "@material-ui/core";

import config from "site-config";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

// Components

const styles = (theme: Theme) => createStyles({
    root: {
        top: 'auto',
        bottom: 0,
        margin: theme.spacing(2),
        padding: theme.spacing(1),
    },
    grow: {
        flexGrow: 1,
    },
    copyright: {
        marginLeft: theme.spacing(3),
        color: theme.palette.primary.main,
    },
});

type Props = WithStyles<typeof styles>

function Footer(props: Props) {
    const { classes } = props;
    return (
        <Toolbar className={classes.root} color="transparent" position="fixed">
            <div className={classes.grow} />
            <IconButton href="https://www.facebook.com/movingoolong/" color="primary">
                <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/movingoolongpod/" color="primary">
                <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/movingoolongpod/" color="primary">
                <TwitterIcon />
            </IconButton>
            <h4 className={classes.copyright}>{config.copyright}</h4>
        </Toolbar>
    );
}

export default withStyles(styles)(Footer)