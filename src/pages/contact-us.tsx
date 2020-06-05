import React from "react"
import { Link } from "gatsby"

import SEO from "components/seo"

const ContactUsPage = () => (
  <>
    <SEO title="Contact Us" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default ContactUsPage
