import {
  GET_ITEMS,
  TAG_ITEM,
} from '../actions/types';

const itemsReducer = (items = [], action) => {
  switch(action.type) {
    case GET_ITEMS:
      return action.payload.data;
    case TAG_ITEM:
      return items;
    default:
      return items;
  }
};

export default itemsReducer;