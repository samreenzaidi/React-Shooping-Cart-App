const CartSummary = ({cartTotal}) => {
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className="cart-summary">
            <div className="redeem-voucher">
                <input type="text" class="voucher-input" placeholder="Voucher code"/>
                <button type="submit" class="redeem-button">Redeem</button>    
            </div>    
            <div className="cart-summary-bottom">
                <div className="cart-total">
                    <div className="cart-total-section">
                        <p>Subtotal</p>
                        <p>{USDollar.format(cartTotal)}</p>
                    </div>
                    <div className="cart-total-section">
                        <p>Shipping fee</p>
                        <p>$20</p>
                    </div>
                    <div className="cart-total-section">
                        <p>Coupon</p>
                        <p>No</p>
                    </div>
                    <div className="cart-total-section">
                        <p><strong>Total</strong></p>
                        <p><strong>{USDollar.format(cartTotal + 20)}</strong></p>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
                <div className="cart-checkout">
                    <button>Check out</button>
                </div>
            </div>
        </div>
    )
}
export default CartSummary;