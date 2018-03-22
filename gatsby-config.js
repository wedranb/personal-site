module.exports = {
  siteMetadata: {
    title: 'Vedran Blazenka - JavaScript Developer',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown",
      },
    },
    'gatsby-transformer-remark'
  ],
};
