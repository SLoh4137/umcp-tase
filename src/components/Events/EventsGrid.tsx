import React from "react"
import {
    Container,
    Grid,
    Theme,
    createStyles,
    withStyles,
    WithStyles,
} from "@material-ui/core"

// Hooks
import useEvents, { EventHookOptions, EventArrayType, } from "hooks/useEvents"

// Components
import EventPreview from "./EventPreview"
import Text from "components/Typography/Text"

const styles = (theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(2),
        },
        item: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    })

// Note EventHookOptions provides
//  tags?: string[],
//  filterFunction?: EventFilterFunction,
//  amount: number,
type Props = WithStyles<typeof styles> & {
        events: EventArrayType
        showDescription?: boolean
        showFullDescription?: boolean
    }

/**
 * Component that displays the events in a grid.
 * Note that the data could be further abstracted from the UI aspect by moving the useEvents hook to another component
 * That way we can utilize just the Grid portion of this component
 * @param props
 */
function EventsGrid(props: Props) {
    const {
        classes,
        showDescription = true,
        showFullDescription = false,
        events,
    } = props

    const noEventsText = events.length <= 0 ? <Text variant="h5" align="center">No events to show</Text> : <></>

    return (
        <Container className={classes.root} maxWidth="xl">
            {noEventsText}
            <Grid
                container
                spacing={3}
                alignItems="stretch"
                alignContent="stretch"
                justify="center"
            >
                {events.map((event) => (
                    <Grid
                        item
                        className={classes.item}
                        xs={12}
                        sm={4}
                        key={event.node.id}
                    >
                        <EventPreview
                            event={event}
                            showDescription={showDescription}
                            showFullDescription={showFullDescription}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(EventsGrid)
