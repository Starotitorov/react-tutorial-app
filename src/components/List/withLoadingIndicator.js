import React from 'react';

const withLoadingIndicator = WrappedComponent => ({ isLoading, loadingIndicator, ...props }) => {
  if (isLoading) {
    return loadingIndicator;
  }

  return (<WrappedComponent {...props} />);
};

export default withLoadingIndicator;
