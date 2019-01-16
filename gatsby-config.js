module.exports = {
  siteMetadata: {
    title: 'Modulz',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-favicon",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        plugins: [],
      },
    },
    "gatsby-plugin-netlify-headers"
  ],
}
