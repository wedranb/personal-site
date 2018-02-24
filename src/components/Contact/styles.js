import glamorous from 'glamorous';

const Container = glamorous.div({});

const Name = glamorous.p({
    fontSize: 18,
    margin: 0,
    marginBottom: 5
},  ({ theme }) => ({
  color: theme.main.blackColor
}));

const Email = glamorous.a({
    fontSize: 14,
    color: '#9B9B9B',
    textDecoration: 'none'
},  ({ theme }) => ({
  color: theme.main.grayColor
}));

export default {
    Container,
    Name,
    Email
};
