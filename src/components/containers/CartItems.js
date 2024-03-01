import { addItemToCartAction, removeItemFromCartAction, decrementItemQtyFromCartAction } from "../store/action/CartAction";
import { useDispatch } from "react-redux";

const CartItems = ({cartItems}) => {
    const dispatch = useDispatch();
    const incrementItemQty = (item) => {
        dispatch(addItemToCartAction(item))
    }

    const decrementItemQty = (item) => {
        dispatch(decrementItemQtyFromCartAction(item))
    }
    
    const removeItemFromCart = (e, item) => {
        e.preventDefault();
        dispatch(removeItemFromCartAction(item))
    }

    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <table className="cart-products">
            <th>
                <tr>
                    <td>PRODUCT</td>
                    <td>PRICE</td>
                    <td>QTY</td>
                    <td>UNIT PRICE</td>
                </tr>
            </th>
            
            {cartItems.map((item) => 
                <tr className="cart-product">
                    <td>
                        <div className="product-details">
                            <a className="delete-product" onClick={(e) => removeItemFromCart(e, item)}></a>
                            <div className="product-image"><img src={item.image} /></div>
                            <div className="product-name">{item.title}</div>
                        </div>
                    </td>
                    <td>
                        <p className="product-price">{USDollar.format(item.price*item.quantity)}</p>
                    </td>
                    <td>
                        <p className="product-qty">
                            <button class='qtyminus' disabled={item.quantity ===1} onClick={() => decrementItemQty(item)}>-</button>
                            <input type='text' name='quantity' value={item.quantity} class='qty' />
                            <button class='qtyplus' onClick={() => incrementItemQty(item)}>+</button>
                        </p>
                    </td>
                    <td>
                        <p className="product-unit-price">{USDollar.format(item.price)}</p>
                    </td>
                </tr>
            )}  
        </table>
    )
}
export default CartItems;