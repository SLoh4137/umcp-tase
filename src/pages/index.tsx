import React from "react"
import { graphql, PageProps } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import {
    Container,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import SEO from "components/seo"
import PastEventsGrid from "components/Events/PastEventsGrid"
import Welcome from "components/General/Welcome"
import PageContent from "components/Layout/PageContent"
import ParallaxBackground from "components/General/ParallaxBackground"
// import Newsletter from "components/Mailchimp/Newsletter"

const styles = (theme: Theme) => createStyles({})

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: GatsbyTypes.HomePageQuery
    }

function IndexPage(props: Props) {
    const { data, classes } = props
    const { mainBackground, presidentBackground, newsletterBackground } = data

    if (!mainBackground) throw new Error("Main background does not exist.")

    return (
        <>
            <SEO title="Home" />
            <ParallaxBackground image={mainBackground}>
                <Welcome />
            </ParallaxBackground>

            <PageContent>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
                <Container maxWidth={"xl"}>
                    <PastEventsGrid />
                </Container>
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
