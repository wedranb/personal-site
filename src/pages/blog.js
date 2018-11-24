import React from 'react';
import Link from 'gatsby-link';

// HOC
import withLayout from '../hoc/withLayout';

const BlogPage = ({ data }) => (
  <div>
    <h1>Blog</h1>
  </div>
);

export default withLayout(BlogPage);
