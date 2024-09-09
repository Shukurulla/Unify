import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const key = "order-list";

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const jsonValue = window.localStorage.getItem(key);

  useEffect(() => {
    setCartItems(JSON.parse(jsonValue));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
