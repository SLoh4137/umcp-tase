import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Grid,
    IconButton,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import {
    PinDrop,
    BusinessCenter,
    Facebook,
    Instagram,
} from "@material-ui/icons"

// Components
import SEO from "components/seo"
import ContactUsForm from "components/ContactUs/Form"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Section from "components/PageLayout/Section"
import Text from "components/Typography/Text"
import ContentWithIcon from "components/General/ContentWithIcon"

const styles = (theme: Theme) =>
    createStyles({
        sideInfo: {
            marginTop: theme.spacing(3),
        },
    })

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: GatsbyTypes.ContactUsPageQuery
    }

function ContactUsPage(props: Props) {
    const { data, classes } = props
    const { contactBackground, site } = data

    if (!contactBackground)
        throw new Error("Contact Us background does not exist.")
    if (!site?.siteMetadata) throw new Error("Site metadata not defined")

    const { facebook, instagram } = site.siteMetadata
    if (!facebook)
        throw new Error(
            "Facebook link not defined in site metadata. Check gatsby-config"
        )
    if (!instagram)
        throw new Error(
            "Instagram link not defined in site metadata. Check gatsby-config"
        )

    return (
        <>
            <SEO title="Contact Us" />
            <ParallaxBackground image={contactBackground}>
                <Text variant="h3" color="white" align="center">
                    Contact Us
                </Text>
            </ParallaxBackground>

            <PageContent>
                <Section maxWidth="lg">
                    <Grid container spacing={5} alignItems="center">
                        <Grid item xs={12} md={9}>
                            <Text variant="h3" color="textSecondary" align="center">
                            Send us a message
                            </Text>
                            <ContactUsForm />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ContentWithIcon
                                className={classes.sideInfo}
                                icon={<PinDrop fontSize="large" />}
                                title="Find us at UMD's office"
                                description="Adele H. Stamp Union, Student Involvement Suite 0207G
                                University of Maryland, College Park"
                            />
                            <ContentWithIcon
                                className={classes.sideInfo}
                                icon={<BusinessCenter fontSize="large" />}
                                title="Connect on social media"
                            >
                                <IconButton href={facebook}>
                                    <Facebook fontSize="large"/>
                                </IconButton>

                                <IconButton href={instagram}>
                                    <Instagram fontSize="large"/>
                                </IconButton>
                            </ContentWithIcon>
                        </Grid>
                    </Grid>
                </Section>
            </PageContent>
        </>
    )
}

export const query = graphql`
    query ContactUsPage {
        contactBackground: file(relativePath: { eq: "mckeldin.jpg" }) {
            ...BackgroundImage
        }
        site {
            siteMetadata {
                facebook
                instagram
            }
        }
    }
`

export default withStyles(styles)(ContactUsPage)
