/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 * Used in gatsby-browser and gatsby-ssr as a wrapper around all pages 
 */

import React from "react"
import { useStaticQuery, graphql, PageProps } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"

type Props = {
  children: React.ReactNode,
} & PageProps

const Layout = (props: Props) => {
  const { children } = props;
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
    <>
      <Header title={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
