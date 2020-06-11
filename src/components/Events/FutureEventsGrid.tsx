import React from "react"
import { EventFilterFunction } from "hooks/useEvents"
import moment from "moment"

import EventsGrid from "./EventsGrid"

type Props = {
    showDescription?: boolean,
}

/**
 * An example component that utilizes the broad EventsGrid to display just future events
 * @param props 
 */
function FutureEventsGrid(props: Props) {
    const { showDescription = true } = props;

    const currentTime = moment();
    const filterFunction: EventFilterFunction = (edge) => {
        if(!edge.node.frontmatter?.date) return false;

        const date = moment(edge.node.frontmatter.date); // Note may need to pass in date format for some browsers
        return date.isAfter(currentTime); // returns true if the date is after the current time, so in the future
    }

    return (
        <EventsGrid showDescription={showDescription} filterFunction={filterFunction} />
    );
}

export default FutureEventsGrid