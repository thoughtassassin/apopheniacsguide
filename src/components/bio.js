/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Container>
            <div
              style={{
                margin: "1rem 0",
                padding: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginRight: rhythm(1 / 2),
                  marginBottom: 0,
                  minWidth: 50,
                  borderRadius: `100%`,
                }}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
              <header
                style={{
                  fontSize: "1.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  A blog about reality
                </h2>
                <div style={{ fontSize: "0.8rem" }}>
                  by <strong>{author}</strong>
                </div>
              </header>
            </div>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/thoughtassassin-icon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export default Bio
