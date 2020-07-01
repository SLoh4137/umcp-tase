import { EventFilterFunction } from "hooks/useEvents"
import moment from "moment"

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


export function removePinned(): EventFilterFunction {
    return (edge) => {
        if (!edge.node.frontmatter) return false
        const { pinned } = edge.node.frontmatter

        // Typescript doesn't accept a maybe value as just a boolean so we have to check if undefined
        return pinned !== undefined && pinned
    }
}