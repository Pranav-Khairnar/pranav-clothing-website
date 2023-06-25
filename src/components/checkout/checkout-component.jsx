import React from "react";

import "./checkout-styles.scss"
import { CartContext } from "../contexts/cart-context";
import { useContext, useEffect } from "react";
import { CheckOutItem } from "../checkout-item/checkout-item-component";

export const Checkout = () => {
    const {cartItems, cartTotal } = useContext(CartContext)
    
    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
                
            </div>
            <h1>Hi I am Checkout page</h1>
            {
                cartItems.map((item) => 
                {   
                    return (
                        <CheckOutItem key={item.id} cartItem = {item}/>
                    )
                })
            }
            <span className="total">
                Total : {cartTotal}
            </span>
        </div>
        )
}