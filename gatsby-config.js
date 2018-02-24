module.exports = {
  siteMetadata: {
    title: 'Vedran Blazenka - JavaScript Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:400,700`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown",
      },
    },
    `gatsby-transformer-remark`,
  ],
};
