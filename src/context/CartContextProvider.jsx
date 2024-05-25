import { useState } from 'react'
import { CartContext } from './CartContext'
import { useLocalStorage } from '../hooks/useLocalStorage'

const key = 'order-list'

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useLocalStorage("order-list", useState([]));
  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
        { children }
    </CartContext.Provider>
  )
}

export default CartContextProvider