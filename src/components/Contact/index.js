import React from 'react';

import {
  Container,
  Name,
  Email,
  Emoji
} from './styles';

const Contact = ({ email }) => (
  <Container>
    <Name to="/">Hi, I'm Vedran Blazenka! <Emoji>👋</Emoji></Name>
    <Email href="mailto:blazenka.vedran@gmail.com?Subject=Hello">
      {email}
    </Email>
  </Container>
)

Contact.defaultProps = {
    email: "blazenka.vedran@gmail.com"
};

export default Contact;
