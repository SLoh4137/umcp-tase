/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react"
import Layout from "./src/components/Layout/Layout"
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "./src/theme"

export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {element}
        </ThemeProvider>
    )
}

export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (!(`IntersectionObserver` in window)) {
        import(`intersection-observer`)
    }
}
