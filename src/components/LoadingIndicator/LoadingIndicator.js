import React from 'react';
import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

const LoadingIndicator = ({ size, className }) =>
  <div className={className}>
    <ClipLoader size={size} color="#0275d8" />
  </div>;

LoadingIndicator.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string
};

export default LoadingIndicator;
