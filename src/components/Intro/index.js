import React from 'react';

import { Container } from './styles';

const Intro = ({ text }) => (
  <Container>
    {text}
  </Container>
);

Intro.defaultProps = {
  text: "I’ve been crafting digital products using JavaScript technologies for the past four years."
};

export default Intro;
