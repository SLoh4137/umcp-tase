import React from "react"

import EventsGrid from "./EventsGrid"
import useEvents from "hooks/useEvents"
import { getPastEventsFunc } from "utils/eventUtils"

type Props = {
    showDescription?: boolean
    includePinned?: boolean
}

/**
 * An example component that utilizes the broad EventsGrid to display just previous events
 * @param props
 */
function PastEventsGrid(props: Props) {
    const { showDescription = true, includePinned = false } = props
    const events = useEvents({
        tags: [],
        filterFunctions: [getPastEventsFunc(includePinned)],
    })

    return <EventsGrid showDescription={showDescription} events={events} />
}

export default PastEventsGrid
