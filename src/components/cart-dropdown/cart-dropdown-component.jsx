import React from "react";
import './cart-dropdown-styles.scss';
import Button from "../button/button-component";


export const CartDropDown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                <Button>
                    GO TO CART
                </Button>
            </div>
        </div>
    )
}