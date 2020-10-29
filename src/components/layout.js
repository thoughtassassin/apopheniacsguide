import React from "react"
import { ScrollContainer } from "gatsby-react-router-scroll"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1),
            lineHeight: "2.5rem",
            marginBottom: "0.8rem",
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <ScrollContainer key="page-component-ul-list">
        <Wrapper>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)} 0 ${rhythm(3 / 4)}`,
            }}
          >
            <header>{header}</header>
            <main>{children}</main>
          </div>
          <StaticQuery
            query={socialQuery}
            render={data => {
              const { social } = data.site.siteMetadata
              return (
                <Footer
                  style={{
                    marginLeft: `auto`,
                    marginRight: `auto`,
                    maxWidth: rhythm(24),
                    padding: `0 ${rhythm(3 / 4)}`,
                  }}
                >
                  © {new Date().getFullYear()},{" "}
                  <a
                    style={{ fontSize: "0.8rem" }}
                    href={`https://twitter.com/${social.twitter}`}
                  >
                    Follow me on Twitter
                  </a>
                </Footer>
              )
            }}
          />
        </Wrapper>
      </ScrollContainer>
    )
  }
}

const socialQuery = graphql`
  query SocialQuery {
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

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  margin: 24px;
`

export default Layout
