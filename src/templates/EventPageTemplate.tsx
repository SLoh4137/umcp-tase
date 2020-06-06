import React from "react";
import { graphql, PageProps } from "gatsby"
import { Container } from "@material-ui/core";

// Components
type Props = { data: GatsbyTypes.EventPageQuery } & PageProps;

function EventPageTemplate(props: Props) {
  const { data, pageContext, location } = props;

  if(!data.markdownRemark?.frontmatter?.title)
  {
    throw new Error("Title not provided")
  }

  const title = data.markdownRemark.frontmatter.title;

  return (
    <Container maxWidth="lg">
      {title}
    </Container>
  );
}

export const query = graphql`
query EventPage($slug: String, $cover: String) {
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
  file(relativePath: {eq: $cover}) {
    childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
        }
    }
  }
}
`

export default EventPageTemplate

