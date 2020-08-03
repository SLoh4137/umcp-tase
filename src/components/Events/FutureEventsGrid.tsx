import React from "react"

import EventsGrid from "./EventsGrid"
import useEvents from "hooks/useEvents"
import { getFutureEventsFunc } from "utils/eventUtils"

type Props = {
    showDescription?: boolean
}

/**
 * An example component that utilizes the broad EventsGrid to display just future events
 * @param props
 */
function FutureEventsGrid(props: Props) {
    const { showDescription = true } = props
    const events = useEvents({
        tags: [],
        filterFunctions: [getFutureEventsFunc()],
    })

    return <EventsGrid showDescription={showDescription} events={events} />
}

export default FutureEventsGrid
