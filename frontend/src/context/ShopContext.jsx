import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/data";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "€"; // Devise de la boutique
  const delivery_charges = 10; // Frais de livraison fixes.
  const navigate = useNavigate();

  const value = { currency, delivery_charges, navigate, products };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
