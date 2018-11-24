import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 690px;
`;

export const Content = styled.section`
  h1,
  h2,
  h3 {
    margin: 0.2em 0;
  }

  p + h1,
  p + h2,
  p + h3 {
    margin-top: 60px;
  }

  p {
    font-size: 18px;
    line-height: 1.7;
    color: #2e2e2e;
  }

  a {
    color: #29c566;
    font-weight: 500;
  }
`;
