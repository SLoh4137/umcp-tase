import React from "react"
import clsx from "clsx"
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

import Text, { TextColorOptions } from "components/Typography/Text"
import ClientOnly from "components/General/ClientOnly"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            "& a": {
                color: theme.palette.secondary.light,
            },
        },
    })

type Props = WithStyles<typeof styles> & {
    content: string | undefined
    className?: string
    color?: TextColorOptions["color"]
}

function MarkdownContent(props: Props) {
    const { content, className = "", color = "textPrimary", classes } = props
    const textClassName = clsx(classes.root, className)

    return (
        <ClientOnly>
            {content ? (
                <Text
                    variant="body1"
                    color={color}
                    className={textClassName}
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            ) : (
                <Text variant="body1" color={color} className={textClassName}>
                    No description provided
                </Text>
            )}
        </ClientOnly>
    )
}

export default withStyles(styles)(MarkdownContent)
