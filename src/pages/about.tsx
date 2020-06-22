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
import PageContent from "components/Layout/PageContent"
import ParallaxBackground from "components/General/ParallaxBackground"

const styles = (theme: Theme) =>
    createStyles({
        title: {
            color: "#ffffff",
            fontSize: "64px",
            textAlign: "center",
        },
    })

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
                <h1 className={classes.title}>About Us</h1>
            </ParallaxBackground>
            <PageContent>
                <Container>
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
