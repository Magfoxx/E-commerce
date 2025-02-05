// Ce fichier sert à créer et gérer un contexte global pour mon application, en particulier pour un site e-commerce. Il utilise la Context API de React pour permettre à différentes parties de l’application d’accéder à des valeurs globales sans avoir à passer ces données manuellement via les props.

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/data";

// Cration du contexte Global
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "€"; // Devise de la boutique
  const delivery_charges = 10; // Frais de livraison fixes.
  const navigate = useNavigate();
  const [search, setSearch] = useState("")
  const [showSearch, setShowSearch] = useState(true)
  const [token, setToken] = useState("")

  const value = { currency, delivery_charges, navigate, products, token, setToken, search, setSearch, showSearch, setShowSearch };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
