import React from 'react';

// Import styles
import {
  Container,
  Title,
  List,
  Item,
  GLink,
  Link
} from './styles';

const SectionItem = ({ title, path, type }) => {
  const link = type !== "opensource" ? <GLink to={path}> {title} </GLink> : <Link href={path} target="_blank">{title} </Link>;

  return (
    <Item>
      {link}
    </Item>
  );
}

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
