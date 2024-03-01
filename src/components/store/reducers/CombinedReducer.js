import { combineReducers } from "redux";
import cartReducer from "./CartReducer";
import redirectToCartReducer from "./RedirectToCartReducer";

const reducers = combineReducers({
    cartItems: cartReducer,
    isCartPage: redirectToCartReducer
});
export default reducers;