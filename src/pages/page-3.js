import React from "react"
import MyMap from "../components/mymap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Page3 = () => (
  <Layout>
    <SEO title="Counter" />
    <h1>Wellcome to a Map page</h1>
    <MyMap/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Page3