import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { withStyles, WithStyles, createStyles } from "@material-ui/core";

const styles = createStyles({
    root: {
        verticalAlign: 'middle',
    },
});

type Props = WithStyles<typeof styles>

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

function Logo(props: Props) {
    const { classes } = props;
    const data = useStaticQuery<GatsbyTypes.LogoQuery>(graphql`
    query Logo {
        file(relativePath: {eq: "logo.png"}) {
          childImageSharp {
            fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
            }
          }
        }
    }
    `);

    if (!data.file?.childImageSharp?.fixed) {
        throw new Error("Image can't be found");
    }

    return (
        <>
            <Img className={classes.root} alt="Logo" fixed={data.file.childImageSharp.fixed} />
        </>
    );
}

export default withStyles(styles)(Logo);