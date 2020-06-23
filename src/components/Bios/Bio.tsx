import React from "react"
import Img from "gatsby-image"
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

// Components
import Text from "components/Typography/Text"

// Types
import { BioType } from "hooks/useBios"

const styles = (__: Theme) =>
    createStyles({
        root: {},
        content: {},
        title: {},
        position: {},
        description: {},
        action: {},
        major: {},
    })

type Props = WithStyles<typeof styles> & {
    bioData: BioType
}

function Bio(props: Props) {
    const { classes, bioData } = props
    const { node, image } = bioData

    if (!node.frontmatter)
        throw new Error("Frontmatter does not exist for node")

    let description = node.html ? (
        <Text
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: node.html }}
        />
    ) : (
        <Text variant="h4" className={classes.description}>
            No description provided
        </Text>
    )

    const { name, position, majors } = node.frontmatter
    const majorArray = majors ? majors.split(",") : []

    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <Img fluid={image.childImageSharp?.fluid} />
                <CardContent>
                    <Text variant="h5" color="textSecondary" className={classes.title}>{name}</Text>
                    <Text variant="subtitle1" className={classes.position}>{position}</Text>
                    {description}
                </CardContent>
            </div>
            <CardActions className={classes.action}>
                {majorArray.map((major) => (
                    <Text variant="caption" className={classes.major}>{major}</Text>
                ))}
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(Bio)
