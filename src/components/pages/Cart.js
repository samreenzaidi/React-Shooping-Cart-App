import React from "react";
import Navbar from '../containers/Navbar';
import Breadcrumbs from '../containers/Breadcrumbs';
import CartItems from '../containers/CartItems';
import CartSummary from '../containers/CartSummary';
import CartEmpty from '../containers/CartEmpty';
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Cart = () =>  {
    const cartItems = useSelector((state) => state.cartItems);
    const prodCategory =  cartItems.cartItems[0]?.category

    const getCartTotal = () => {
        let price = 0.0;
        console.log(CartItems)
        cartItems.cartItems.forEach(element => {
            price+=(element.price*element.quantity);
        });
        return price;
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div className='cart-wrapper'>
            <Navbar />
            {cartItems.cartItems.length > 0 
            ? 
                <React.Fragment>
                    <Breadcrumbs prodCategory={prodCategory}/>
                    <CartItems cartItems={cartItems.cartItems}/>
                    <CartSummary cartTotal={getCartTotal()}/>
                </React.Fragment>
            :
                <CartEmpty />
            }    
        </div>
    )
}

export default Cart;