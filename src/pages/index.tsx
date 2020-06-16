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

// https://www.react-spring.io/docs/props/parallax
// import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

// Components
import ParallaxLayout from "components/Layout/ParallaxLayout"
import SEO from "components/seo"
import PastEventsGrid from "components/Events/PastEventsGrid"
import Welcome from "components/General/Welcome"
import Newsletter from "components/Mailchimp/Newsletter"
import { Parallax } from "react-spring/renderprops-addons"

const styles = (theme: Theme) =>
    createStyles({
        mainBackground: {
            width: "100%",
            position: "relative",
            padding: theme.spacing(4),
            backgroundPosition: "center center",
            backgroundSize: "cover",
        },
    })

type Props = PageProps &
    WithStyles<typeof styles> & {
        data: GatsbyTypes.HomePageQuery
    }

function IndexPage(props: Props) {
    const { data, classes } = props
    const { mainBackground, presidentBackground, newsletterBackground } = data
    return (
        <>

            <SEO title="Home" />
            <BackgroundImage
                fluid={mainBackground?.childImageSharp?.fluid}
                className={classes.mainBackground}
            >
                <Welcome />
            </BackgroundImage>
        </>
    )

    /* If you ever want to explore Parallax using react-spring, the code I started writing is below.
     * I didn't like how it created a separate scroll container which only happens because we have the
     * layout wrapping the entire page */

    // return (
    //     <>
    //         <SEO title="Home" />
    //         <Parallax pages={2}>
    //             <ParallaxLayer offset={0} speed={1}>
    //                 <Container maxWidth="xl">
    //                     <Welcome />
    //                 </Container>
    //             </ParallaxLayer>

    //             <ParallaxLayer
    //                 offset={0.5}
    //                 speed={1}
    //                 className={classes.firstBackground}
    //             />

    //             <ParallaxLayer offset={0.5} speed={1}>
    //                 <PastEventsGrid showDescription={true} />
    //             </ParallaxLayer>
    //         </Parallax>
    //     </>
    // )
}

export const query = graphql`
    query HomePage {
        mainBackground: file(relativePath: { eq: "Taiwan.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        presidentBackground: file(relativePath: { eq: "bg10.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        newsletterBackground: file(relativePath: { eq: "Taiwan2.jpg" }) {
            childImageSharp {
                fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default withStyles(styles)(IndexPage)
