import React from "react"
import { PageProps, graphql } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

// Components
import SEO from "components/seo"
import Section from "components/PageLayout/Section"
import PageContent from "components/PageLayout/PageContent"
import ParallaxBackground from "components/PageLayout/ParallaxBackground"
import Text from "components/Typography/Text"

const styles = (theme: Theme) => createStyles({})

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: GatsbyTypes.EventPageQuery
    }

function EventPage(props: Props) {
    const { data, classes } = props
    const { background } = data

    if (!background) throw new Error("Events background does not exist.")

    return (
        <>
            <SEO title="Events" />
            <ParallaxBackground image={background}>
                <Text variant="h3" color="white" align="center">
                    Events
                </Text>
            </ParallaxBackground>
            <PageContent>
                <Section title="Upcoming Events">
                    <Text variant="h3">Some text</Text>
                </Section>
            </PageContent>
        </>
    )
}

export const query = graphql`
    query EventPage {
        background: file(relativePath: { eq: "events.jpg" }) {
            ...BackgroundImage
        }
    }
`

export default withStyles(styles)(EventPage)
