import React from 'react';
import { branch } from 'recompose';

const renderEmptyListComponent = () => ({ emptyListComponent }) => emptyListComponent;

const withEmptyList = branch(
  ({ items }) => items.length === 0,
  renderEmptyListComponent
);

export default withEmptyList;
