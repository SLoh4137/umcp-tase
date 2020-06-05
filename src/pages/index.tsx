import React from "react"
import { Link, PageProps } from "gatsby"
import SEO from "components/seo"

const IndexPage = (__: PageProps) => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </>
)

export default IndexPage
