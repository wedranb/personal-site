import React from 'react';

import { Container, Title, Text } from './styles';

const Intro = ({ text }) => (
  <Container>
    <Title>JavaScript Developer</Title>
    <Text>I love UI/UX, building products and sharing knowledge.</Text>
    <Text>Oh, and I care about accessibility. 👨‍🔧</Text>
  </Container>
);

Intro.defaultProps = {
  text: ""
};

export default Intro;
