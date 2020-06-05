import React, { useState } from "react"
import { Link } from "gatsby";
import { AppBar, Button, Drawer, Hidden, IconButton, Theme, Toolbar, withStyles, WithStyles, createStyles } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

// Page Components
import Logo from "components/Logo/Logo"

const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    opacity: 1.0,
  },
  title: {
    color: "#ffffff",
    margin: theme.spacing(1),
    marginLeft: theme.spacing(2),
    display: 'inline',
    textTransform: "uppercase",
    fontSize: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  grow: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1),
    textDecoration: 'none',
    display: 'inline-block',
  },
  button: {
    color: theme.palette.primary.dark,
    //textTransform: 'lowercase',
  },
  menuButton: {
    //color: "#ffffff",
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    width: "40%",
  },
});

type Props = { title: string } & WithStyles<typeof styles>

function Header(props: Props) {
  const { classes, title } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const links = (
    <>
      <Link className={classes.link} to="/">
        <Button className={classes.button}>
          <b>Home</b>
        </Button>
      </Link>
      <Link className={classes.link} to="/about">
        <Button className={classes.button}>
          <b>About</b>
        </Button>
      </Link>
      <Link className={classes.link} to="/contact-us">
        <Button className={classes.button}>
          <b>Contact Us</b>
        </Button>
      </Link>
    </>
  );

  return (
    <AppBar
      className={classes.root}
      position={"relative"}
      elevation={0}
    >
      <Toolbar>
        <Link className={classes.link} to="/">
          <Logo />
          <h2 className={classes.title}>{title}</h2>
        </Link>

        <div className={classes.grow} />

        <Hidden xsDown>
          {links}
        </Hidden>

        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>

        <Hidden smUp>
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
            {links}
          </Drawer>
        </Hidden>

      </Toolbar>

    </AppBar>
  );
}

export default withStyles(styles)(Header);