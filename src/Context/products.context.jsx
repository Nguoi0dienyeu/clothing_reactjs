import { createContext, useState } from "react";
import { getCategoryAndDocuments } from "../utils/Firebase/firebase.utils";
import { useEffect } from "react";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoryAndDocuments();
      console.log("categoryMap:", categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
