import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
    AppBar,
    IconButton,
    withStyles,
    Toolbar,
    createStyles,
    Theme,
    WithStyles,
} from "@material-ui/core"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"

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
    const { site } = useStaticQuery<GatsbyTypes.FooterQuery>(
        graphql`
            query Footer {
                site {
                    siteMetadata {
                        copyright
                        facebook
                        instagram
                    }
                }
            }
        `
    )

    if (!site?.siteMetadata) throw new Error("Site metadata not defined")
    
    const { facebook, instagram, copyright} = site.siteMetadata;

    if (!facebook) throw new Error("Facebook link not defined in site metadata. Check gatsby-config")
    if (!instagram) throw new Error("Instagram link not defined in site metadata. Check gatsby-config")
    if (!copyright) throw new Error("Copyright not defined in site metadata. Check gatsby-config")

    return (
        <AppBar
            position="relative"
            color="transparent"
            className={classes.root}
            elevation={0}
        >
            <Toolbar>
                <div className={classes.grow} />

                <IconButton href={facebook} color="primary">
                    <FacebookIcon />
                </IconButton>

                <IconButton href={instagram} color="primary">
                    <InstagramIcon />
                </IconButton>

                <h4 className={classes.copyright}>
                    {copyright}
                </h4>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Footer)
