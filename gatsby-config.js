module.exports = {
  siteMetadata: {
    title: 'Modulz',
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-favicon",
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        plugins: [],
      },
    },
    "gatsby-plugin-netlify-headers"
  ],
}
