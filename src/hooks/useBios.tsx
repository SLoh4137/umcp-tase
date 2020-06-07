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
                    presentationWidth
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

    let bio = data.allMarkdownRemark.edges;
}