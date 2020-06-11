import React from "react"
import { Link, PageProps } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

import SEO from "components/seo"

const styles = (theme: Theme) =>
    createStyles({
        // Add styles here
    })

type Props = WithStyles<typeof styles> & PageProps

const AboutPage = () => (
    <>
        <SEO title="About Us" />
        <h1>About Us Goes Here</h1>
        {/*
         * Add content for the about us page here
         */}
    </>
)

export default withStyles(styles)(AboutPage)
