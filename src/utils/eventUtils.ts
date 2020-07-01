import { EventFilterFunction } from "hooks/useEvents"
import moment, { Moment } from "moment"

export function getFutureEventsFunc(
    includePinned: boolean = false,
    timeToCompare: Moment = moment()
): EventFilterFunction {
    return (edge) => {
        if (!edge.node.frontmatter) return false
        const { pinned, date } = edge.node.frontmatter

        if (pinned !== undefined && pinned && includePinned) return true

        // Note may need to pass in date format for some browsers
        // returns true if the date is after the current time, so in the future
        return date !== undefined ? moment(date).isAfter(timeToCompare) : false
    }
}

export function getPastEventsFunc(
    includePinned: boolean = false,
    timeToCompare: Moment = moment()
): EventFilterFunction {
    return (edge) => {
        if (!edge.node.frontmatter) return false
        const { pinned, date } = edge.node.frontmatter

        if (pinned !== undefined && pinned && includePinned) return true

        // Note may need to pass in date format for some browsers
        // returns true if the date is before the current time, so in the past
        return date !== undefined ? moment(date).isBefore(timeToCompare) : false
    }
}

export function futureEvents(): EventFilterFunction {
    const currentTime = moment()

    return (edge) => {
        if (!edge.node.frontmatter?.date) return false

        const date = moment(edge.node.frontmatter.date) // Note may need to pass in date format for some browsers
        return date.isAfter(currentTime) // returns true if the date is after the current time, so in the future
    }
}

export function pastEvents(): EventFilterFunction {
    const currentTime = moment()

    return (edge) => {
        if (!edge.node.frontmatter?.date) return false

        const date = moment(edge.node.frontmatter.date) // Note may need to pass in date format for some browsers
        return date.isBefore(currentTime) // returns true if the date is before the current time, so in the past
    }
}
