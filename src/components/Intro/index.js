import React from 'react';

import { Container, Title, Text, Social, Link, Item } from './styles';

const Intro = ({ text }) => (
  <Container>
    <Title>JavaScript Developer</Title>
    <Social>
      <Link>
        <Item href="https://twitter.com/vblazenka" target="_blank">twitter</Item>
      </Link>
      <Link >
        <Item href="https://www.linkedin.com/in/vblazenka" target="_blank">linkedin</Item>
      </Link>
      <Link>
        <Item href="http://github.com/wedranb" target="_blank">github</Item>
      </Link>
    </Social>
  </Container>
);

Intro.defaultProps = {
  text: ""
};

export default Intro;
