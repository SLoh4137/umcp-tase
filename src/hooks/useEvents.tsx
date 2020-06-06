import { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

// Normally, we would want to rely on the auto-generated type
// But since we're reconstructing the events and matching up with their corresponding images,
// we're going to define our own return type here



export default function useEvents(tags?: string[]) {

  // Because static queries can't have parameters, we have to query for everything
  const data = useStaticQuery<GatsbyTypes.EventsQuery>(graphql`
    query Events {
        allMarkdownRemark(filter: {frontmatter: {category: {eq: "events"}}}, sort: {order: DESC, fields: frontmatter___date}) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                date
                category
                cover
              }
              html
              id
            }
          }
        }
        allFile(sort: {fields: relativePath, order: ASC}, filter: {absolutePath: {regex: "static/assets/"}}) {
          edges {
            node {
              id
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
    }
    `);

  if (!data.allMarkdownRemark?.edges || !data.allFile?.edges) {
    throw new Error("Error in formation of events query")
  }

  let events = data.allMarkdownRemark.edges;


  if (tags && tags.length > 0) {
    const containsTag = (eventTag: GatsbyTypes.Maybe<string>) => {
      return eventTag ? tags?.includes(eventTag) : false;
    }

    // Tags were passed in, so filter based on them
    events =
      data.allMarkdownRemark.edges.filter(
        eventNode => eventNode.node.frontmatter?.tags && eventNode.node.frontmatter.tags.some(containsTag)
      );
  }

  // Can make this faster by using binary search
  const findImage = (imgSrc: string) => {
    return data.allFile.edges.find(file => file.node.relativePath == imgSrc)
  }

  // This matches up each image with its proper event
  // This is inefficient because it goes through every image to find the right one for this event
  // A better search would use the fact that allFile returns sorted results and use binary search to find the matching image
  // Note this is harder because absolutePath 
  const eventsWithPhoto = events.map(eventNode => {
    if (!eventNode.node.frontmatter?.cover) {
      throw new Error("Node does not have an image associated with it.");
    }

    const image = findImage(eventNode.node.frontmatter?.cover);
    if (!image) {
      throw new Error("Tried to find an associated image, but failed");
    }

    return {
      node: eventNode.node,
      image: image?.node,
    }

  });

  return eventsWithPhoto;
}

export type EventArrayType = ReturnType<typeof useEvents>; 

export type EventType = EventArrayType[0];
