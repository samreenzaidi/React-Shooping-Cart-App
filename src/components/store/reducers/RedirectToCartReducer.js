const initialState = false;
  
const RedirectToCartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REDIRECT_TO_CART':
        return action.payload
    }
      
    return state;
  };

  export default RedirectToCartReducer;