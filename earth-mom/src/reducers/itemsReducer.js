import {
  GET_ITEMS,
  TAG_ITEM,
} from '../actions/types';

import { itemsList } from '../data/itemsList';

const itemsReducer = (items = itemsList, action) => {
  switch(action.type) {
    case GET_ITEMS:
      return action.payload;
    case TAG_ITEM:
      return items;
    default:
      return items;
  }
};

export default itemsReducer;