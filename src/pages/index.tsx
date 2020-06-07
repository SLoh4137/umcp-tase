import React from "react"
import { PageProps } from "gatsby"
import { Container, Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

// Components
import SEO from "components/seo"
import EventsGrid from "components/Events/EventsGrid"
import Welcome from "components/General/Welcome"

const styles = (theme: Theme) => createStyles({
  firstBackground: {
    backgroundColor: theme.palette.primary.main,
  },
});

type Props = PageProps & WithStyles<typeof styles>;

function IndexPage(props: Props) {
  const { classes } = props;
  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer offset={1} speed={1} className={classes.firstBackground} />
        <ParallaxLayer offset={2} speed={1} className={classes.firstBackground} />
      </Parallax>
      <Container maxWidth="xl">
        <SEO title="Home" />
        <Welcome />
        <EventsGrid showDescription={true} />
      </Container>
    </>

  );
}

export default withStyles(styles)(IndexPage)
