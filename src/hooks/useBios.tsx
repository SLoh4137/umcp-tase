import { useStaticQuery, graphql } from "gatsby"
import { mapImgToNode } from "utils/hookUtils"

// Type Definitions
type BioEdge = GatsbyTypes.BioQuery["allMarkdownRemark"]["edges"][0]
type BioNode = BioEdge["node"]

export type BioArrayType = ReturnType<typeof useBios>
export type BioType = BioArrayType[0]
export type BioImageType = BioType["image"]

/**
 * Returns all bios with their associated images
 */
export default function useBios() {
    // Because static queries can't have parameters, we have to query for everything
    const data = useStaticQuery<GatsbyTypes.BioQuery>(graphql`
        query Bio {
            allMarkdownRemark(
                filter: { frontmatter: { category: { eq: "bio" } } }
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            majors
                            name
                            position
                            imgsrc
                            category
                        }
                        html
                    }
                }
            }
            allFile(
                sort: { fields: relativePath, order: ASC }
                filter: { absolutePath: { regex: "static/assets/" } }
            ) {
                edges {
                    node {
                        id
                        relativePath
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `)

    if (!data.allMarkdownRemark?.edges || !data.allFile?.edges) {
        throw new Error("Error in formation of Bio query")
    }

    return mapImgToNode<BioNode>(
        data.allMarkdownRemark.edges,
        data.allFile.edges
    )
}
