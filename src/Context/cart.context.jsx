import { createContext, useState } from "react";

export const CartConext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };
  return <CartConext.Provider value={value}>{children}</CartConext.Provider>;
};
