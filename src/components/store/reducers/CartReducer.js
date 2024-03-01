const initialState = {
    cartItems: [],
    totalQuantity: 0
};
let cartItemsObj = {};
  
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM_TO_CART':
        const itemExist = state.cartItems.find(
          product => product.id === action.payload.id,
        );
        
        if(itemExist){
          cartItemsObj = state.cartItems.map(item => 
            item.id === itemExist.id ? { ...item, quantity: item.quantity + 1 } : item
          )
          return {
            cartItems: cartItemsObj,
            totalQuantity: state.totalQuantity + 1
          }
        }
        
        return {
          cartItems: [...state.cartItems, action.payload],
          totalQuantity: state.totalQuantity + 1
        }
      case 'REMOVE_ITEM_FROM_CART':
        cartItemsObj = state.cartItems.filter(item => 
          item.id !== action.payload.id
        )
        return {
          cartItems: cartItemsObj,
          totalQuantity: state.totalQuantity - 1
        }

      case 'DECREMENT_ITEM_QTY_FROM_CART':
        cartItemsObj = state.cartItems.map(item => 
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        return {
          cartItems: cartItemsObj,
          totalQuantity: state.totalQuantity - 1
        }
        
    }
      
    return state;
  };

  export default CartReducer;