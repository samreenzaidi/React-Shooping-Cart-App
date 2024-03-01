export const addItemToCartAction = (payload) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload
  };
};

export const removeItemFromCartAction = (payload) => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload,
  };
};

export const decrementItemQtyFromCartAction = (payload) => {
  return {
    type: 'DECREMENT_ITEM_QTY_FROM_CART',
    payload,
  };
};

