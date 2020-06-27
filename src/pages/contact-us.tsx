import React from "react"
import { PageProps, graphql } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

// Components
import SEO from "components/seo"
import ContactUsForm from "components/ContactUs/Form"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Text from "components/Typography/Text"

const styles = (theme: Theme) => createStyles({})

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
                <Text variant="h3" color="white" align="center">
                    Contact Us
                </Text>
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
