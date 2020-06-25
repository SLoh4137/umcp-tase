/**
 * Implement Gatsby's SSR APIs in this file.
 * Usually the same as in gatsby-browser
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react"
import Layout from "./src/components/Layout/Layout"
import ProviderLayout from "./src/components/Layout/ProviderLayout"

export const wrapPageElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
    return (
        <ProviderLayout>
            {element}
        </ProviderLayout>
    )
}