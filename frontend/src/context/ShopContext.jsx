// Ce fichier sert à créer et gérer un contexte global pour mon application, en particulier pour un site e-commerce. Il utilise la Context API de React pour permettre à différentes parties de l’application d’accéder à des valeurs globales sans avoir à passer ces données manuellement via les props.

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../assets/data";
import { toast } from "react-toastify";

// Cration du contexte Global
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "€"; // Devise de la boutique
  const delivery_charges = 10; // Frais de livraison fixes.
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({});

  // ajouter des articles au panier
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Veuillez d'abord sélectionner une taille");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  // Obtenir le nombre de produit ajouté au panier
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    currency,
    delivery_charges,
    navigate,
    products,
    token,
    setToken,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    getCartCount,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
