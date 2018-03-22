import styled from 'styled-components';

const Container = styled.div``

const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 72px;
  font-weight: 600;
  color: ${props => props.theme.main.blackColor};
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  margin: 8px 0;
  color: #535353;
  max-width: 90%;
`;

export default {
  Container,
  Title,
  Text
};
