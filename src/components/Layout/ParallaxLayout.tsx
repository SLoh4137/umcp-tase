/**
 * Parallax Layout component
 */

import React from "react"
import { useStaticQuery, graphql, PageProps } from "gatsby"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"

// https://www.react-spring.io/docs/props/parallax
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

import Header from "./Header"
import Footer from "./Footer"

type Props = {
    children: React.ReactNode
    pages: number
    background?: React.ReactNode
} & PageProps

const ParallaxLayout = (props: Props) => {
    const { children, pages, background } = props
    const scrollTrigger = useScrollTrigger({
        threshold: 100, // 100 is the default
    })
    const data = useStaticQuery<GatsbyTypes.SiteTitleQuery>(graphql`
        query SiteTitle {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    if (!data.site?.siteMetadata?.title) {
        throw new Error("No title provided. Check gatsby-config")
    }

    return (
        <Parallax pages={pages}>
            <Header
                title={data.site.siteMetadata.title}
                scrollTrigger={scrollTrigger}
            />
            {background ? background : <></>}
            {children}
            <Footer />
        </Parallax>
    )
}

export default ParallaxLayout
