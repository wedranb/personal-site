import React from 'react';
import Link from 'gatsby-link';

// HOC
import withLayout from '../hoc/withLayout';

// Import components
import Intro from '../components/Intro';
import Section from '../components/Section';
import Shorcuts from '../components/Shorcuts';

// Import styles
import { Container, IntroContainer } from '../styles/index.styles';

const IndexPage = ({ data }) => (
  <Container>
    <IntroContainer>
      <Intro />
    </IntroContainer>
  </Container>
);

export default withLayout(IndexPage);
