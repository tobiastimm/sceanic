import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import { Normalize } from 'styled-normalize'
import Header from './Header'
import Footer from './Footer'

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #1a2a32;
    color: #ced4de;
  }
  html, body, #___gatsby, #___gatsby>div {
    height: 100%
  }
`

const Content = styled.main`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  text-align: center;
  height: inherit;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Normalize />
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
