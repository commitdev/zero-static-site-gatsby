import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GetStarted = () => (
  <Layout>
    <SEO title="How to get started" />
    <h3>Resources</h3>
    <ul>
      <li>
        <Link to="/using-typescript/">Using TypeScript</Link>
      </li>
      <li>
        <Link to="https://www.gatsbyjs.com/docs/how-to">Gatsby's how to guide</Link>
      </li>
      <li>
        <Link to="https://www.gatsbyjs.com/plugins">Gatsby Plugins</Link>
      </li>
      <li>
        <Link to="https://github.com/prayash/awesome-gatsby">Awesome Gatsby: An open-source list of useful resources</Link>
      </li>
      <li>
        <Link to="https://gatsbytemplates.io">Themes: gatsbytemplates.io</Link>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GetStarted
