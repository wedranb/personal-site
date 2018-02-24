const extractFrontmatterData = (item) => item.node.frontmatter;
const checkType = (item, type) => item.type === type;

const ItemTypeFilter = (items, type) =>
  items
    .map(extractFrontmatterData)
    .filter(item => checkType(item, type))

export default ItemTypeFilter;
