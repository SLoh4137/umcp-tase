import React from "react"
import { Link } from "gatsby"
import {
    Card,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Components
import Text from "components/Typography/Text"
import MarkdownContent from "components/General/MarkdownContent"

// Types
import { EventType } from "hooks/useEvents"

// Hooks
import ColoredShadowImage from "components/General/ColoredShadowImage"
import ButtonLink from "components/Button/ButtonLink"

const styles = (theme: Theme) =>
    createStyles({
        content: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    })

type Props = WithStyles<typeof styles> & {
    event: EventType
    showDescription?: boolean
    showFullDescription?: boolean
}

function EventPreview(props: Props) {
    const {
        classes,
        event,
        showDescription = true,
        showFullDescription = false,
    } = props

    if (!event.node.frontmatter) {
        throw new Error("Frontmatter does not exist")
    }

    if (!event.node.fields?.slug) {
        throw new Error("Slug not valid")
    }

    const { title, tags, date, link } = event.node.frontmatter
    const { slug } = event.node.fields

    return (
        <Card elevation={0}>
            <Link to={slug}>
                <ColoredShadowImage
                    image={event.image}
                    alt={`${title} event image`}
                />
            </Link>

            <Grid
                container
                className={classes.content}
                direction="column"
                alignItems="center"
            >
                <Grid item>
                    <Text
                        variant="h6"
                        color="textSecondary"
                        align="center"
                        heading
                    >
                        <b>{title}</b>
                    </Text>
                </Grid>
                <Grid item>
                    {showDescription ? (
                        <MarkdownContent
                            // className={classes.text}
                            content={event.node.html}
                        />
                    ) : (
                        <></>
                    )}
                </Grid>
                <Grid item>
                    <ButtonLink size="small" to={slug} variant="contained">
                        Event Details
                    </ButtonLink>
                </Grid>
            </Grid>
        </Card>
    )
}

export default withStyles(styles)(EventPreview)
