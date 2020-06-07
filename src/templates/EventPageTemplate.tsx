import React from "react";
import { graphql, PageProps } from "gatsby"
import { Container } from "@material-ui/core";

// Note this has to be synchronized with gatsby-node in createPage
type PageContext = {
  slug: string, 
  cover: string,
  nextTitle: string,
  nextSlug: string, 
  prevTitle: string,
  prevSlug: string,
}

type Props = { data: GatsbyTypes.EventPageQuery, pageContext: PageContext } & PageProps;

function EventPageTemplate(props: Props) {
  const { data, pageContext, location } = props;

  // pageContext dictates the relationship between this page and others
  // For example, a component could display the next event's title and a link to it with the given parameters 

  // location could be used to show the current pathname

  if(!data.markdownRemark?.frontmatter?.title)
  {
    throw new Error("Title not provided")
  }

  const title = data.markdownRemark.frontmatter.title;

  return (
    <Container maxWidth="lg">
      {/* Content for each page goes here */}
      {title}
    </Container>
  );
}

export const query = graphql`
query EventPage($slug: String, $imgsrc: String) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    id
    frontmatter {
      title
      tags
      date
      link
    }
  }
  file(relativePath: {eq: $imgsrc}) {
    childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
  }
}
`

export default EventPageTemplate

