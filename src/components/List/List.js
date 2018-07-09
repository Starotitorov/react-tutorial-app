import PropTypes from 'prop-types';

const List = ({ items, deletePost, children }) => children({ items, deletePost });

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})),
  children: PropTypes.func
};

export default List;
