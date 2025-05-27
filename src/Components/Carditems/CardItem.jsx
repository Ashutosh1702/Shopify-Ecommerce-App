import React, { useContext, useState } from 'react'
import "./Carditems.css"
import remove_icon from "../../assets/images/remove.webp"
import { ShopContext } from '../Context/ShopContext';
import PaymentOptions from '../PaymentOptions/PaymentOptions';

const CartItem = () => {
    const { all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
    const [showPayment, setShowPayment] = useState(false);

    // Calculate total amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item of all_product) {
            if (cartItems[item.id] > 0) {
                totalAmount += item.new_price * cartItems[item.id];
            }
        }
        return totalAmount;
    };

    const handlePaymentComplete = () => {
        // Here you would typically handle the successful payment
        alert('Payment successful! Thank you for your purchase.');
        // Clear the cart or redirect to a success page
    };

    return (
        <div className='cardItems'>
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((item) => {
                if (cartItems[item.id] > 0) {
                    return (
                        <div key={item.id} className="cartitems-formate">
                            <img src={item.image} alt={item.name} className='carticon-product-icon' />
                            <p>{item.name}</p>
                            <p>${item.new_price.toFixed(2)}</p>
                            <div className="cartitems-quantity">
                                <button 
                                    className="cartitems-quantity-btn"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    -
                                </button>
                                <span className="cartitems-quantity-count">{cartItems[item.id]}</span>
                                <button 
                                    className="cartitems-quantity-btn"
                                    onClick={() => addToCart(item.id)}
                                >
                                    +
                                </button>
                            </div>
                            <p>${(item.new_price * cartItems[item.id]).toFixed(2)}</p>
                            <img 
                                src={remove_icon} 
                                alt="Remove" 
                                className="cartitems-remove-icon"
                                onClick={() => removeFromCart(item.id)}
                            />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount().toFixed(2)}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Total</p>
                            <p>${getTotalCartAmount().toFixed(2)}</p>
                        </div>
                    </div>
                    <button onClick={() => setShowPayment(true)}>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>
                    <div className="classitem-promocode">
                        <input type="text" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>

            {showPayment && (
                <PaymentOptions 
                    totalAmount={getTotalCartAmount()} 
                    onPaymentComplete={handlePaymentComplete}
                />
            )}
        </div>
    );
};

export default CartItem;
