module.exports = {
  siteMetadata: {
    title: 'Sceanic - 🚀 Spacegray meets 🌊 Oceanic',
  },
  pathPrefix: '/sceanic',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#1a2a32',
        theme_color: '#1a2a32',
        display: 'minimal-ui',
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
