import React from 'react';

import {
    Container,
    Name,
    Email
} from './styles';

const Contact = ({ email }) => (
  <Container>
    <Name>Hi, I'm Vedran Blazenka! 👋</Name>
    <Email href="mailto:blazenka.vedran@gmail.com?Subject=Hello">
      {email}
    </Email>
  </Container>
)

Contact.defaultProps = {
    email: "blazenka.vedran@gmail.com"
};

export default Contact;
