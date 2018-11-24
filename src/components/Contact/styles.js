import Link from 'gatsby-link';
import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Name = styled(Link)`
  display: block;
  margin: 0;
  margin-bottom: 5px;
  font-size: 24px;
  text-decoration: none;
  color: ${props => props.theme.main.blackColor};
`;

export const Email = styled.a`
  font-size: 16px;
  color: #9b9b9b;
  text-decoration: none;
  color: ${props => props.theme.main.grayColor};
`;

export const Emoji = styled.span`
  transition: all 0.2s ease;
`;
