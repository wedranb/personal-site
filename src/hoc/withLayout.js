import React from "react";

// Components
import Layout from "../components/layout";

export default WrappedComponent => {
  return class EnhancedComponent extends React.Component {
    render() {
      return (
        <Layout>
          <WrappedComponent {...this.props} />
        </Layout>
      );
    }
  };
};
