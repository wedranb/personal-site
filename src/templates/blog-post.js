import React from 'react';

// Import styles
import {
  Container,
  Content
} from '../styles/blog-post.styles';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Container>
      <h1>{post.frontmatter.title}</h1>
      <Content dangerouslySetInnerHTML={{ __html: post.html }} />
    </Container>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
