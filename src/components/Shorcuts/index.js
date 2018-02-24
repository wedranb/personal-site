import React from 'react';

// Import helper
import itemTypeFilter from '../../helpers/itemTypeFilter';

// Import enum
import ItemType from '../../enums/ItemType';

// Import components
import Section from '../Section';

// Import styles
import { Container, SectionContainer } from './styles';

const Shorcuts = ({ items }) => {
  const blogPosts = itemTypeFilter(items, ItemType.FEATURED_POST);
  const openSource = itemTypeFilter(items, ItemType.OPENSOURCE);
  const projects = itemTypeFilter(items, ItemType.PROJECT);

  return (
    <Container>
      <SectionContainer>
        <Section title="BLOG POSTS" items={blogPosts} />
      </SectionContainer>
      <SectionContainer>
        <Section title="OPEN SOURCE" items={openSource} />
      </SectionContainer>
      <SectionContainer>
        <Section title="PROJECTS" items={projects} />
      </SectionContainer>
    </Container>
  )
}

export default Shorcuts;
