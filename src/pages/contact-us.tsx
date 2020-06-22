import React from "react"
import { PageProps, graphql } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

// Components
import SEO from "components/seo"
import ContactUsForm from "components/ContactUs/Form"
import PageContent from "components/Layout/PageContent"
import ParallaxBackground from "components/General/ParallaxBackground"

const styles = (theme: Theme) =>
    createStyles({
        title: {
            color: "#ffffff",
            fontSize: "64px",
            textAlign: "center",
            marginTop: "auto",
            marginBotom: "auto",
        },
    })

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: GatsbyTypes.ContactUsPageQuery
    }

function ContactUsPage(props: Props) {
    const { data, classes } = props
    const { contactBackground } = data

    if (!contactBackground)
        throw new Error("Contact Us background does not exist.")

    return (
        <>
            <SEO title="Contact Us" />
            <ParallaxBackground image={contactBackground}>
                <h1 className={classes.title}>Contact Us</h1>
            </ParallaxBackground>
            <PageContent>
                <ContactUsForm />
            </PageContent>
        </>
    )
}

export const query = graphql`
    query ContactUsPage {
        contactBackground: file(relativePath: { eq: "mckeldin.jpg" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(ContactUsPage)
