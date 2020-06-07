import { useStaticQuery, graphql } from "gatsby"

export default function useBios() {
    // Because static queries can't have parameters, we have to query for everything
    const data = useStaticQuery<GatsbyTypes.BioQuery>(graphql`
        query Bio {
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "bio"}}}, sort: {fields: frontmatter___order, order: ASC}) {
            edges {
                node {
                    id
                    frontmatter {
                        majors
                        name
                        position
                        imgsrc
                        category
                        order
                    }
                    html
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
        }`
    );

    if (!data.allMarkdownRemark?.edges || !data.allFile?.edges) {
        throw new Error("Error in formation of Bio query")
    }

    let bios = data.allMarkdownRemark.edges;

    // Can make this faster by using binary search
    const findImage = (imgSrc: string) => {
        return data.allFile.edges.find(file => file.node.relativePath == imgSrc)
    }

    // This matches up each image with its proper event
    // This is inefficient because it goes through every image to find the right one for this event
    // A better search would use the fact that allFile returns sorted results and use binary search to find the matching image
    // Note this is harder because absolutePath 
    const bioWithPhoto = bios.map(eventNode => {
        if (!eventNode.node.frontmatter?.imgsrc) {
            throw new Error("Node does not have an image associated with it.");
        }

        const image = findImage(eventNode.node.frontmatter?.imgsrc);
        if (!image) {
            throw new Error("Tried to find an associated image, but failed");
        }

        return {
            node: eventNode.node,
            image: image.node,
        }

    });

    return bioWithPhoto;
}

export type BioArrayType = ReturnType<typeof useBios>;

export type BioType = BioArrayType[0];

export type BioImageType = BioType["image"]
