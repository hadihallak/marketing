import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'

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

            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@modulz' },
            { name: 'twitter:creator', content: '@modulz' },
            { name: 'twitter:title', content: 'The next step in visual coding.' },
            { name: 'twitter:description', content: 'The visual code editor for designing and building digital products—without writing code.' },
            { name: 'twitter:image:src', content: "https://www.modulz.app/social.png" },
            { name: 'twitter:domain', content: 'https://www.modulz.app' },

            { property: 'og:title', content: 'The next step in visual coding.' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'https://www.modulz.app' },
            { property: 'og:image', content: 'https://www.modulz.app/social.png' },
            { property: 'og:description', content: 'The visual code editor for designing and building digital products—without writing code.' },
            { property: 'og:site_name', content: 'Modulz' },

            { itemprop: 'name', content: 'The next step in visual coding.' },
            { itemprop: 'description', content: 'The visual code editor for designing and building digital products—without writing code.' },
            { itemprop: 'image', content: "https://www.modulz.app/social.png" },

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
