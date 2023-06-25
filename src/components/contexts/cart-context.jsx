import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";



const addCartItem = (cartItems, productToAdd) => {
      //find if the cart contains the item or not 
      const doesExist = cartItems.find((cartItem) => cartItem.id === productToAdd.id );

      //if contains already , just increment the value
      if(doesExist){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity+1}
        : cartItem
        )
      };

      //does not contain the item, then add the new item to the cart

      return [...cartItems, {...productToAdd, quantity:1}];
}


const removeCartItem = ( cartItems, cartItemToRemove ) => {
    //find item to remove
    const doesExist = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id );


    //check if quantity is 1, if 1 remove from cart
    if(doesExist.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id) 
    }

    //return back cartItems with reduced quantity
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id 
        ? {...cartItem,  quantity: cartItem.quantity-1}
        : cartItem
    );
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: () => {

    },
    cartItems: [],
    addItemToCart : () => {},
    removeItemFromCart : () => {},
    clearItemFromCart : () => {},
    cartCount:0,
    cartTotal:0
})



export const CartProvider = ({children}) => {
     const[isCartOpen,setIsCartOpen] = useState(false);
     const [cartItems, setCartItems] = useState([]);
     const [cartCount, setCartCount] = useState(0);
     const [cartTotal, setCartTotal] = useState(0);

     useEffect(() => {
        var newCount = 0;
        cartItems.forEach((item) => newCount = newCount + item.quantity)
        //const newCount = cartItems.reduce((sum, cartItem)=>sum + cartItem.quantity, 0)
        setCartCount(newCount)
     }, [cartItems])
     
     useEffect(() => {
        var newCount = 0;
        cartItems.forEach((item) => newCount = newCount + item.quantity * item.price)
        //const newCount = cartItems.reduce((sum, cartItem)=>sum + cartItem.quantity, 0)
        setCartTotal(newCount)
     }, [cartItems])
     
     const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
     }
     const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
     }
     const clearItemFromCart = (cartItemToRemove) => {
        setCartItems(clearCartItem(cartItems, cartItemToRemove));
     }

     const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, cartTotal,  removeItemFromCart, clearItemFromCart};

     return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}