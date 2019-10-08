import { GET_ITEMS, TAG_ITEM } from './types.js';


const items = [
  {
    name: 'leela',
    age: 20
  },
  {
    name: 'leela',
    age: 21
  },
  {
    name: 'leela',
    age: 22
  },
];

export const getItems = () => {
  return {
    type: GET_ITEMS,
    payload: items,
  }
};

export const tagItem = () => {
  return {
    type: TAG_ITEM,
    payload: items,
  }
};