import Link from "gatsby-link";
import styled from 'styled-components';

const Container = styled.div``

const Name = styled(Link)`
  display: block;
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
  text-decoration: none;
  color: ${props => props.theme.main.blackColor};
`;

const Email = styled.a`
  font-size: 14px;
  color: #9B9B9B;
  text-decoration: none;
  color: ${props => props.theme.main.grayColor};
`;


const Emoji = styled.span`
  transition: all 0.2s ease;
`;

export default {
  Container,
  Name,
  Email,
  Emoji
};
