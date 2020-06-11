import React from "react"
import { PageProps } from "gatsby"
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
import SEO from "components/seo"
import PastEventsGrid from "components/Events/PastEventsGrid"
import Welcome from "components/General/Welcome"
import Newsletter from "components/Mailchimp/Newsletter"

const styles = (theme: Theme) =>
    createStyles({
        firstBackground: {
            backgroundColor: theme.palette.primary.main,
        },
    })

type Props = PageProps & WithStyles<typeof styles>

function IndexPage(props: Props) {
    const { classes } = props
    return (
        <>
            <SEO title="Home" />
            <Container maxWidth="xl">
                <Welcome />
                <PastEventsGrid showDescription={true} />
            </Container>
        </>
    )

    /* If you ever want to explore Parallax using react-spring, the code I started writing is below.
     * I didn't like how it created a separate scroll container which only happens because we have the
     * layout wrapping the entire page */

    /* 
  return (
    <>
      <SEO title="Home" />
      <Parallax pages={2}>

        <ParallaxLayer offset={0} speed={1}>
          <Container maxWidth="xl">
            <Welcome />
          </Container>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={1} className={classes.firstBackground} />

        <ParallaxLayer offset={0.5} speed={1}>
          <EventsGrid showDescription={true} />
        </ParallaxLayer>
      </Parallax>
    </>
    
  );
  */
}

export default withStyles(styles)(IndexPage)
