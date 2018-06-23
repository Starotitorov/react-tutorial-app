import PropTypes from 'prop-types';

const List = ({ items, children }) => children({ items });

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.func
};

export default List;
