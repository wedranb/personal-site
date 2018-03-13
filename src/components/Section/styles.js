import styled, { css } from 'styled-components';
import GatsbyLink from "gatsby-link"

const Container = styled.div``;

const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 24px;
  margin-top: 0;
  text-transform: uppercase;
  font-weight: 400;
  color: ${props => props.theme.main.grayColor}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  padding: 10px 0;
  cursor: pointer;

  &:hover a {
    color: ${props => props.theme.main.linkHoverColor};
  }
`

const LinkBase = css`
  font-size: 24px;
  font-weight: 700;
  transition: color 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);
  text-decoration: none;
  color: ${props => props.theme.main.blackColor};
`;

const GLink = styled(GatsbyLink)`
  ${LinkBase}
`;

const Link = styled.a`
  ${LinkBase}
`;

export default {
  Container,
  Title,
  List,
  Item,
  GLink,
  Link
};
