import styled from 'styled-components';

const Container = styled.div``

const Name = styled.p`
    font-size: 18px;
    margin: 0;
    margin-bottom: 5px;
    color: ${props => props.theme.main.blackColor};
`;

const Email = styled.a`
    font-size: 14px;
    color: #9B9B9B;
    text-decoration: none;
    color: ${props => props.theme.main.grayColor};
`;

export default {
    Container,
    Name,
    Email
};
