import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { redirectToCartAction } from "../store/action/RedirectToCartAction";

const Header = () => {
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();
    const redirectToCart = (e) => {
        e.preventDefault();
        dispatch(redirectToCartAction(true))
    };
    
    return (
        <header className='header-wrapper'>
            <div className="header-l">
                <div class="country-selector">
                    <select>
                        <option selected>EN</option>
                    </select>
                </div>
                <div className="currency-selector">
                    <select>
                        <option selected>USD</option>
                    </select>
                </div>
            </div>
            <div className="header-r">
                <div className="account">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="12" cy="7" r="3"/></g></svg>
                    <div>My profile</div>
                </div>
                <div className="items-in-minicart">
                    <a onClick={(e) => redirectToCart(e)}>
                        <span className='qty-circle'>{cartItems.totalQuantity}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2zm3.716 11l-1.23-8h13.028l-2.4 8zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>
                    </a>
                    <div>Items</div>
                    <div className='cart-total'>$0.00</div>
                </div>
                <div className='search'>
                    <a href='#search'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"><circle cx="11" cy="11" r="5.5"/><path stroke-linecap="round" stroke-linejoin="round" d="m15 15l4 4"/></g></svg>
                    </a>
                </div>
            </div>
        </header>
    )
}
export default Header;