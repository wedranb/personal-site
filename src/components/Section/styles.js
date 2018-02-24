import glamorous from 'glamorous';

const Container = glamorous.div({});

const Title = glamorous.h2({
  fontSize: 16,
  marginBottom: 24,
  marginTop: 0,
  textTransform: 'uppercase',
  fontWeight: 400
}, ({ theme }) => ({
  color: theme.main.grayColor
}));

const List = glamorous.ul({
  margin: 0,
  padding: 0,
  listStyle: 'none'
});

const Item = glamorous.li({
  padding: '10px 0',
  '&:hover a': {
    cursor: 'pointer'
  }
});

const Link = glamorous.a({
  fontSize: 24,
  fontWeight: 700,
  transition: 'color 0.1s cubic-bezier(0.215, 0.61, 0.355, 1);'
}, ({ theme }) => ({
  color: theme.main.blackColor,
  '&:hover': {
    color: theme.main.linkHoverColor
  }
}));

export default {
  Container,
  Title,
  List,
  Item,
  Link
};
