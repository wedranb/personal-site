import React from 'react';
import Link from 'gatsby-link';

// Import components
import Intro from '../components/Intro';
import Section from '../components/Section';
import Shorcuts from '../components/Shorcuts';

// Import styles
import {
  Container,
  IntroContainer
} from './index.styles';

const IndexPage = ({ data }) => (
  <Container>
    <IntroContainer>
      <Intro />
    </IntroContainer>
    <Shorcuts items={data.allMarkdownRemark.edges} />
  </Container>
);

export default IndexPage

export const IndexPageQuery = graphql`
query IndexPageQuery {
  allMarkdownRemark (
    sort: { order: DESC, fields: [frontmatter___date]}
  ){
    totalCount
    edges {
      node {
        id
        html
        frontmatter {
          date(formatString: "DD.MM.YYYY.")
          title,
          type
        }
      }
    }
  }
}
`
