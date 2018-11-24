import React from 'react';

// HOC
import withLayout from '../hoc/withLayout';

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default withLayout(NotFoundPage);
