import React from "react"
import { PageProps } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

// Components
import SEO from "components/seo"
import ContactUsForm from "components/ContactUs/Form"

const styles = (theme: Theme) =>
    createStyles({
        // Add styles here
    })

type Props = PageProps & WithStyles<typeof styles>

function ContactUsPage(__: Props) {
    return (
        <>
            <SEO title="Contact Us" />
            <ContactUsForm />
        </>
    )
}

export default withStyles(styles)(ContactUsPage)
