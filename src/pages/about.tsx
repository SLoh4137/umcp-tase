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
import Section from "components/PageLayout/Section"
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
                <Section>
                    <Text align="center">
                        TASA at UMCP is dedicated to develop and maintain
                        Taiwanese/Taiwanese American student life and
                        organizational relations at the University of Maryland -
                        College Park, as well as developing relations with
                        Taiwanese/Taiwanese American communities nationwide.
                    </Text>
                </Section>
                <Section title="Mission Statement">
                    <Text align="center">
                        At TASA, we aim to provide these functions:
                    </Text>
                </Section>
                
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
