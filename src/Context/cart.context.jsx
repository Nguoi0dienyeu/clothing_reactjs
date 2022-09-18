import { createContext, useState, useEffect } from "react";

// ham xu ly add item
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// ham xu ly remove item khi bang  1
const removeCartItem = (cartItems, cartItemToremove) => {
  // tìm kiếm cart item để remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToremove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToremove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// check nếu số lượng bằng thì sẽ remove  item đó đi và hiện thông báo có đồng ý remove hay không

export const CartConext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  removeItemFormCart: () => {},
  clearItemFormCart: () => {},
  addItemToCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newcartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotal(newcartTotal);
  }, [cartItems]);

  // ham  add  item
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // ham remove  item
  const removeItemToCart = (cartItemToremove) => {
    setCartItems(removeCartItem(cartItems, cartItemToremove));
  };

  const clearItemFormCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    clearItemFormCart,
    count,
    removeItemToCart,
    total,
  };
  return <CartConext.Provider value={value}>{children}</CartConext.Provider>;
};
