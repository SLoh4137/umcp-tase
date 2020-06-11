import React from "react"
import { Container, Grid, Theme, createStyles, withStyles, WithStyles } from "@material-ui/core"

// Hooks
import useEvents from "hooks/useEvents"

// Components
import EventPreview from "./EventPreview"

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
    showDescription?: boolean,
    tags?: string[],
}

function EventsGrid(props: Props) {
    const { classes, showDescription = true, tags } = props;
    const eventsWithPhoto = useEvents({tags: tags});

    return (
        <Container className={classes.root} maxWidth="xl">
            <Grid container spacing={3} alignItems="stretch" alignContent="stretch" justify="center">
                {eventsWithPhoto.map((event) => 
                    <Grid item className={classes.item} xs={12} sm={4} lg={3} key={event.node.id}>
                        <EventPreview event={event} showDescription={showDescription} />
                    </Grid>
                )}
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(EventsGrid)