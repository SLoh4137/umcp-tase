import React from "react"
import { PageProps } from "gatsby"
import { Container, Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

// Components
import SEO from "components/seo"
import EventsGrid from "components/Events/EventsGrid"
import Welcome from "components/General/Welcome"

const styles = (theme: Theme) => createStyles({
  // Add styles here
});

type Props = PageProps & WithStyles<typeof styles>;

const IndexPage = (__: PageProps) => (
  <Container maxWidth="xl">
    <SEO title="Home" />
    <Welcome />
    <EventsGrid showDescription={true} />
  </Container>
)

export default withStyles(styles)(IndexPage)
