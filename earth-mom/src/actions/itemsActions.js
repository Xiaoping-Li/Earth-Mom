import { GET_ITEMS, TAG_ITEM } from './types.js';




export const getItems = () => {
  return {
    type: GET_ITEMS,
    // payload: items,
  }
};

export const tagItem = () => {
  return {
    type: TAG_ITEM,
    payload: items,
  }
};