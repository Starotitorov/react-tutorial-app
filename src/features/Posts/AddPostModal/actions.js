import { show, hide } from 'redux-modal';
import { ADD_POST_MODAL } from './constants';

export const showAddPostModal = () => show(ADD_POST_MODAL);

export const hideAddPostModal = () => hide(ADD_POST_MODAL);
