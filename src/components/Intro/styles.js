import glamorous from 'glamorous';

const Container = glamorous.h1({
  fontSize: 38,
  lineHeight: '48px',
  fontWeight: '700'
},  ({ theme }) => ({
  color: theme.main.blackColor
}));

export default {
  Container
};
