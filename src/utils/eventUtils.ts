import { EventFilterFunction } from "hooks/useEvents"
import moment, { Moment } from "moment"

export function getFutureEventsFunc(
    timeToCompare: Moment = moment()
): EventFilterFunction {
    return (edge) => {
        if (!edge.node.frontmatter) return false
        const { date } = edge.node.frontmatter

        // Note may need to pass in date format for some browsers
        // returns true if the date is after the current time, so in the future
        return date !== undefined ? moment(date).isAfter(timeToCompare) : false
    }
}

export function getPastEventsFunc(
    timeToCompare: Moment = moment()
): EventFilterFunction {
    return (edge) => {
        if (!edge.node.frontmatter) return false
        const { date } = edge.node.frontmatter

        // Note may need to pass in date format for some browsers
        // returns true if the date is before the current time, so in the past
        return date !== undefined ? moment(date).isBefore(timeToCompare) : false
    }
}

export const removePinnedEvents: EventFilterFunction = (edge) => {
    if (!edge.node.frontmatter) return false
    const { pinned } = edge.node.frontmatter

    // Event is pinned, so return false and remove it
    return pinned !== undefined && !pinned
}

export const onlyPinnedEvents: EventFilterFunction = (edge) => {
    if (!edge.node.frontmatter) return false
    const { pinned } = edge.node.frontmatter

    // Event is pinned, so return true and keep it
    return pinned !== undefined && pinned
}
