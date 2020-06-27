import React from "react"
import { PageProps, graphql } from "gatsby"
import {
    Container,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

import SEO from "components/seo"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Text from "components/Typography/Text"

const styles = (theme: Theme) => createStyles({})

type Props = WithStyles<typeof styles> &
    PageProps & {
        data: GatsbyTypes.AboutPageQuery
    }

function AboutPage(props: Props) {
    const { data, classes } = props
    const { aboutBackground } = data

    if (!aboutBackground) throw new Error("About background does not exist.")
    return (
        <>
            <SEO title="About Us" />
            <ParallaxBackground image={aboutBackground} imageHeight={"65vh"}>
                <Text variant="h3" color="white" align="center">
                    About Us
                </Text>
            </ParallaxBackground>
            <PageContent>
                <Container>
                    <Text variant="h1" color="textSecondary">
                        About Us Goes Here
                    </Text>
                    <h1>About Us Goes Here</h1>
                    <h1>About Us Goes Here</h1>
                    <h1>About Us Goes Here</h1>
                    <h1>About Us Goes Here</h1>
                    <h1>About Us Goes Here</h1>
                    <h1>About Us Goes Here</h1>
                    <h1>About Us Goes Here</h1>
                    <h1>About Us Goes Here</h1>
                    <h1>About Us Goes Here</h1>
                </Container>

                {/*
                 * Add content for the about us page here
                 */}
            </PageContent>
        </>
    )
}

export const query = graphql`
    query AboutPage {
        aboutBackground: file(relativePath: { eq: "tasa2019.jpg" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(AboutPage)
