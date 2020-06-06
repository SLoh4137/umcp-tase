import React from "react"
import { Link } from "gatsby"
import { Card, CardActionArea, Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

import { EventType } from "hooks/useEvents"

const styles = (theme: Theme) => createStyles({
    root: {
        marginBottom: theme.spacing(2),
    },
    item: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
});

type Props = WithStyles<typeof styles> & {
    event: EventType,
    showDescription?: boolean,
}

function EventsGrid(props: Props) {
    const { classes, event, showDescription = true } = props;
    
    return (
        <Card className={classes.root}>
            {/* Implement more logic utilizing event here */}
            {event.node.frontmatter?.title}
        </Card>
    );
}

export default withStyles(styles)(EventsGrid)