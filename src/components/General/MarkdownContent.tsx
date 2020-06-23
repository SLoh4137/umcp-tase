import React from "react"
import clsx from "clsx"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            "& p": {
                color: theme.palette.text.primary,
            },

            "& a": {
                color: theme.palette.secondary.dark,
            },
        },
    })

type Props = WithStyles<typeof styles> & {
    content: string | undefined
    className?: string
}

function MarkdownContent(props: Props) {
    const { content, className = "", classes } = props
    const textClassName = clsx(classes.root, className)

    return content ? (
        <Text
            variant="body1"
            color="textPrimary"
            className={textClassName}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    ) : (
        <Text variant="body1" color="textPrimary" className={textClassName}>
            No description provided
        </Text>
    )
}

export default withStyles(styles)(MarkdownContent)
