import React from "react"
import { Card, CardContent, CardActions, Theme, createStyles, withStyles, WithStyles, CardActionArea } from "@material-ui/core"

import Image from "components/General/Image"

// Types
import { BioType } from "hooks/useBios"

const styles = (__: Theme) => createStyles({
    root: {

    },
    content: {

    },
    title: {

    },
    position: {

    },
    description: {

    },
    action: {

    },
    major: {

    },
})

type Props = WithStyles<typeof styles> & {
    bioData: BioType,
}

function Bio(props: Props) {
    const { classes, bioData } = props;
    const { node, image } = bioData;

    if (!node.frontmatter) throw new Error("Frontmatter does not exist for node");

    let description = node.html ?
        <div
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: node.html }}
        />
        : <h4 className={classes.description}>No description provided</h4>

    const { name, position, majors } = node.frontmatter;
    const majorArray = majors ? majors.split(",") : [];

    return (
        <Card className={classes.root}>
            <div className={classes.content}>
                <Image image={image} />
                <CardContent>
                    <h2 className={classes.title}>{name}</h2>
                    <h3 className={classes.position}>{position}</h3>
                    {description}
                </CardContent>
            </div>
            <CardActions className={classes.action}>
                {majorArray.map(major => <h5 className={classes.major}>{major}</h5>)}
            </CardActions>
        </Card>
    );
}

export default withStyles(styles)(Bio)