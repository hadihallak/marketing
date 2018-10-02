import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import './layout.css'
import SocialImage from "./../assets/social.png"

const Layout = ({ children, data }) => (
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
            { name: 'description', content: 'The visual code editor for designing and building digital products—without writing code.' },
            { name: 'keywords', content: 'design, mockup, design tool, sketch, figma, visual code, code editor, UI, CSS, website, builder' },

            { name: 'twitter:card', content: 'photo' },
            { name: 'twitter:site', content: '@modulz' },
            { name: 'twitter:creator', content: '@modulz' },
            { name: 'twitter:title', content: 'The next step in visual coding.' },
            { name: 'twitter:description', content: 'The visual code editor for designing and building digital products—without writing code.' },
            { name: 'twitter:image:src', content: `${SocialImage}` },
            { name: 'twitter:domain', content: 'https://www.modulz.app' },

            { itemprop: 'name', content: 'The next step in visual coding.' },
            { itemprop: 'description', content: 'The visual code editor for designing and building digital products—without writing code.' },
            { itemprop: 'image', content: `${SocialImage}` },

            { name: 'theme-color', content: '#fff' },
          ]}
        />
          <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
