import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 72px;
  font-weight: 600;
  color: ${props => props.theme.main.blackColor};
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 8px 0;
  color: #535353;
  max-width: 90%;
`;

export const Social = styled.ul`
  margin: 0;
  margin-top: 64px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.li`
`

export const Item = styled.a`
  padding: 7px 15px;
  font-size: 24px;
  text-decoration: underline;
  cursor: pointer;
  color: black;
`


