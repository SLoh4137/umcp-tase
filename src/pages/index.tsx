import React from "react"
import { graphql, PageProps } from "gatsby"
import {
    Container,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import SEO from "components/seo"
import PastEventsGrid from "components/Events/PastEventsGrid"
import Welcome from "components/General/Welcome"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Text from "components/Typography/Text"
import Newsletter from "components/Mailchimp/Newsletter"

import Section from "components/PageLayout/Section"
import ButtonLink from "components/Button/ButtonLink"
import BackgroundImage from "gatsby-background-image"
import ImageSection from "components/PageLayout/ImageSection"

const styles = (theme: Theme) => createStyles({})

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: GatsbyTypes.HomePageQuery
    }

function IndexPage(props: Props) {
    const { data, classes } = props
    const { mainBackground, presidentBackground, newsletterBackground } = data

    if (!mainBackground) throw new Error("Main background does not exist.")
    if (!presidentBackground)
        throw new Error("President background does not exist.")
    if (!newsletterBackground)
        throw new Error("Newsletter background does not exist.")

    return (
        <>
            <SEO title="Home" />
            <ParallaxBackground image={mainBackground} imageHeight="100vh">
                <Welcome />
            </ParallaxBackground>

            <PageContent>
                <Section title="Welcome to TASA @ UMCP">
                    <Text color="textPrimary" align="center" paragraph>
                        <b>Taiwanese American Student Association (TASA)</b> is
                        a social and cultural student organization that aims to
                        celebrate Taiwanese culture. We welcome people from any
                        cultural background as long as you are curious or
                        passionate about Taiwanese culture. We have weekly GBMS
                        on <b>Mondays 7pm - 9pm</b> in Stamp Student Union and
                        host multiple events each semester. Want to learn more?
                        Check out what we're about.
                    </Text>

                    <ButtonLink to="about" variant="contained" color="primary">
                        About TASA
                    </ButtonLink>
                </Section>

                <Section title="Events" maxWidth="xl">
                    <Text color="textPrimary" align="center" paragraph>
                        TASA organizes many fun events throughout the year! Be
                        sure to follow us on{" "}
                        <a href="https://www.facebook.com/umcptasa/">
                            Facebook
                        </a>{" "}
                        for all the latest announcements!
                    </Text>
                    <PastEventsGrid />
                    <ButtonLink to="about" variant="contained" color="primary">
                        Upcoming and Past Events
                    </ButtonLink>
                </Section>

                <ImageSection image={presidentBackground}>
                    <Section>
                        <Text variant="h4" color="white" align="center">
                            Want to see who makes it all happen?
                        </Text>
                        <Text variant="subtitle1" color="white" align="center">
                            Check out our co-presidents!
                        </Text>
                    </Section>
                    <Section>
                        <Text variant="h5" color="white" align="center">
                            Check out the others
                        </Text>
                        <ButtonLink
                            to="board"
                            variant="contained"
                            color="primary"
                        >
                            Board
                        </ButtonLink>
                    </Section>
                </ImageSection>

                <ImageSection image={newsletterBackground}>
                    <Section>
                        <Text variant="h4" color="white" align="center">
                            Subscribe to our Newsletter
                        </Text>

                        <Newsletter maxWidth="sm"/>
                    </Section>
                </ImageSection>

                <Section title="Want to contact us?">
                    <ButtonLink
                        to="contact-us"
                        color="primary"
                        variant="contained"
                    >
                        Click Here!
                    </ButtonLink>
                </Section>
            </PageContent>
        </>
    )
}

export const query = graphql`
    query HomePage {
        mainBackground: file(relativePath: { eq: "Taiwan.jpg" }) {
            ...BackgroundImage
        }
        presidentBackground: file(relativePath: { eq: "bg10.jpg" }) {
            ...BackgroundImage
        }
        newsletterBackground: file(relativePath: { eq: "Taiwan2.jpg" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(IndexPage)
