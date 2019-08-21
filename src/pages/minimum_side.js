import React from "react"
import { Link, graphql } from 'gatsby'
import Image from "../components/image"
import Img from 'gatsby-image'
import Layout from "../components/layout"

export default (props) => (
  <Layout>
    <h1>Velkommen til den simple side</h1>
    <p>Hej dette er en minimum side</p>
    <Image />
    <Link to="/">Go back to the homepage</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Img fluid={props.data.imageOne.childImageSharp.fluid} />
    </div>
  </Layout>
)


export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "aamosen.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;