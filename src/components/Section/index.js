import React from 'react';

// Import styles
import {
  Container,
  Title,
  List,
  Item,
  Link
} from './styles';

const SectionItem = ({ title }) => (
  <Item>
    <Link>
      {title}
    </Link>
  </Item>
)

const renderItem = (item) => <SectionItem {...item} />

const Section = ({ title, items }) => (
  <Container>
    <Title>{title}</Title>
    <List>
      {items.map(renderItem)}
    </List>
  </Container>
);

export default Section;
