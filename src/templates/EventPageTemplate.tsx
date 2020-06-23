import React from "react"
import { graphql, PageProps } from "gatsby"
import {
    Card,
    CardContent,
    CardActions,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
    CardActionArea,
} from "@material-ui/core"

import { Container } from "@material-ui/core"

import Img from "gatsby-image"

const styles = (theme: Theme) =>
    createStyles({
        image: {
            padding: theme.spacing(1),
        },
        title: {
            color: theme.palette.primary.main,
        },
        description: {
            "& p": {
                fontSize: "14px",
                color: theme.palette.secondary.main,
            },

            "& a": {
                color: theme.palette.secondary.dark,
            },
        },
    })

// Note this has to be synchronized with gatsby-node in createPage
type PageContext = {
    slug: string
    cover: string
    nextTitle: string
    nextSlug: string
    prevTitle: string
    prevSlug: string
}

type Props = {
    data: GatsbyTypes.EventPageQuery
    pageContext: PageContext
} & PageProps &
    WithStyles<typeof styles>

function EventPageTemplate(props: Props) {
    const { data, pageContext, location, classes } = props

    // pageContext dictates the relationship between this page and others
    // For example, a component could display the next event's title and a link to it with the given parameters

    // location could be used to show the current pathname

    if (!data.markdownRemark?.frontmatter?.title)
        throw new Error("Title not provided")
    if (!data.file) throw new Error("Image doesn't exist")
    if (!data.markdownRemark.html) throw new Error("No description")

    return (
        <Container maxWidth="lg">
            <Img
                className={classes.image}
                fluid={data.file.childImageSharp?.fluid}
            />
            <h1 className={classes.title}>{data.markdownRemark.frontmatter.title}</h1>
            <div
                className={classes.description}
                dangerouslySetInnerHTML={{
                    __html: data.markdownRemark.html,
                }}
            />
        </Container>
    )
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
        file(relativePath: { eq: $imgsrc }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default withStyles(styles)(EventPageTemplate)
