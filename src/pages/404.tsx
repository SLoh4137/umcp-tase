import React from "react"
import { PageProps } from "gatsby"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

// Components
import SEO from "components/seo"

const styles = (theme: Theme) =>
    createStyles({
        // Add styles here
    })

type Props = PageProps & WithStyles<typeof styles>

function NotFoundPage(__: Props) {
    return (
        <>
            <SEO title="404 Not found" />
            <h1>The page you're looking for doesn't exist!</h1>
            {/* Insert better not found page content*/}
        </>
    )
}

export default withStyles(styles)(NotFoundPage)
