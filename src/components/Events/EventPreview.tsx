import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import clsx from "clsx"
import moment from "moment"
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

import { EventType } from "hooks/useEvents"
import Img from "gatsby-image"
import Text from "components/Typography/Text"

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
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flexShrink: 1,
        },
        header: {
            paddingBottom: 0,
        },
        link: {
            textDecoration: "none",
            color: "#ffffff",
        },
        title: {
            // color: theme.palette.primary.main,
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
        },
        date: {
            // color: theme.palette.secondary.main,
            margin: 0,
            marginTop: theme.spacing(1),
            // [theme.breakpoints.only("sm")]: {
            //     fontSize: "12px",
            // },
        },
        description: {
            height: "65px",
            overflow: "hidden",

            "& p": {
                // fontSize: "14px",
                color: theme.palette.text.primary,
            },

            "& a": {
                color: theme.palette.secondary.dark,
            },
        },
        action: {
            //display: "flex",
            flexGrow: 1,
            margin: 0,
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            paddingTop: 0,
        },
        grow: {
            flexGrow: 1,
        },
        tags: {
            fontSize: "10px",
        },

        button: {
            //marginLeft: "auto",
        },
    })

type Props = WithStyles<typeof styles> & {
    event: EventType
    showDescription?: boolean
}

function EventPreview(props: Props) {
    const { classes, event, showDescription = true } = props
    const data = useStaticQuery<GatsbyTypes.DateFormatQuery>(graphql`
        query DateFormat {
            site {
                siteMetadata {
                    dateFormat
                }
            }
        }
    `)

    if (!event.node.frontmatter) {
        throw new Error("Frontmatter does not exist")
    }

    if (!event.node.html) {
        throw new Error("No description given for event")
    }

    if (!event.node.fields?.slug) {
        throw new Error("Slug not valid")
    }

    const { title, tags, date } = event.node.frontmatter
    const { slug } = event.node.fields

    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <Link className={classes.link} to={slug}>
                    <CardActionArea>
                        <Img fluid={event.image.childImageSharp?.fluid} />
                        <CardContent className={classes.header}>
                            <Text
                                variant="h4"
                                className={classes.title}
                                color="textSecondary"
                            >
                                {title}
                            </Text>
                            <Text
                                variant="subtitle1"
                                className={classes.date}
                                color="textPrimary"
                            >
                                {moment(date).format(
                                    data.site?.siteMetadata?.dateFormat
                                )}
                            </Text>
                            {showDescription ? (
                                <div
                                    className={clsx(
                                        classes.description,
                                        "MuiTypography-body1"
                                    )}
                                    dangerouslySetInnerHTML={{
                                        __html: event.node.html,
                                    }}
                                />
                            ) : (
                                <></>
                            )}
                        </CardContent>
                    </CardActionArea>
                </Link>
            </div>

            <CardActions className={classes.action}>
                <Grid container alignItems="flex-end" justify="space-between">
                    <Grid item xs={6}>
                        <div className={classes.tags}>
                            {/* {tags ? tags.map(tag => <TagLink tag={tag} key={tag} />) : <></>} */}
                            {tags ? (
                                tags.map((tag) => {
                                    ;<Text variant="caption">{tag}</Text>
                                })
                            ) : (
                                <></>
                            )}
                        </div>
                    </Grid>
                    <Grid item>
                        <Button
                            className={classes.button}
                            color="secondary"
                            size="small"
                            href={slug}
                        >
                            Read More
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(EventPreview)
