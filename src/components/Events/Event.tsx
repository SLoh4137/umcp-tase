import React, { useState } from "react"
import { Link } from "gatsby"
import moment from "moment"
import {
    Button,
    Card,
    CardActions,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"
import { useSpring, animated as a } from "react-spring"

// Components
import Text from "components/Typography/Text"
import MarkdownContent from "components/General/MarkdownContent"
import ColoredShadowImage from "components/General/ColoredShadowImage"
import ButtonLink from "components/Button/ButtonLink"

// Types
import { EventType } from "hooks/useEvents"

// Hooks
import useDateFormat from "hooks/useDateFormat"
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            height: "100%",
            flexDirection: "column",
            margin: theme.spacing(1),
            [theme.breakpoints.down("sm")]: {
                margin: theme.spacing(0),
            },
        },
        content: {
            marginTop: theme.spacing(2),
        },
        text: {
            textAlign: "center",
        },
        link: {
            textDecoration: "none",
            color: "#ffffff",
        },
        title: {
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
        },
        date: {
            margin: 0,
            marginTop: theme.spacing(1),
        },
        tags: {
            fontSize: "10px",
        },
    })

type Props = WithStyles<typeof styles> & {
    event: EventType
    showDescription?: boolean
    showFullDescription?: boolean
}

function Event(props: Props) {
    const {
        classes,
        event,
        showDescription = true,
        showFullDescription = false,
    } = props
    // const dateFormat = useDateFormat()
    const dateFormat = "M/D"

    if (!event.node.frontmatter) {
        throw new Error("Frontmatter does not exist")
    }

    if (!event.node.fields?.slug) {
        throw new Error("Slug not valid")
    }

    const { title, tags, date, link } = event.node.frontmatter
    const { slug } = event.node.fields

    const [isHover, setHover] = useState(false)
    const springStyle = useSpring({
        to: {
            transform: isHover ? "scale(1.1)" : "scale(1.0)",
        },
        immediate: usePrefersReducedMotion(),
    })

    return (
        <>
            <Link
                to={slug}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <a.div style={springStyle}>
                    <ColoredShadowImage
                        image={event.image}
                        alt={`${title} event image`}
                    />
                </a.div>
            </Link>
            <Card elevation={0}>
                <Grid
                    container
                    className={classes.content}
                    direction="column"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item>
                        <Text variant="subtitle2" color="textSecondary">
                            {moment(date).format(dateFormat)}
                        </Text>
                    </Grid>
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
                                content={event.node.excerpt}
                            />
                        ) : (
                            <></>
                        )}
                    </Grid>
                </Grid>

                <CardActions>
                    <Grid
                        container
                        alignItems="center"
                        justify="center"
                        spacing={2}
                    >
                        <Grid item>
                            <Button
                                size="small"
                                href={link}
                                variant="contained"
                            >
                                FB
                            </Button>
                        </Grid>
                        <Grid item>
                            <ButtonLink
                                size="small"
                                to={slug}
                                variant="contained"
                            >
                                Event Details
                            </ButtonLink>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </>
    )
}

export default withStyles(styles)(Event)
