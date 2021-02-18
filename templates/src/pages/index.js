import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1>Coming Soon...</h1>
    <Link to="/how-to-get-started/">Getting started</Link> <br />
  </Layout>
)

export default IndexPage
