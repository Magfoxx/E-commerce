import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {

  const {navigate, token, cartItems, setCartItems, getCartAmount, delivery_charges, products} = useContext(ShopContext)
  const [method, setMethode] = useState('cod')

  return (
    <div className="bg-primary mb-16">
      {/* Container */}
      <form className="max-padd-container py-10">
        <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
          {/* Côté gauche */}
          <div className="flex flex-1 flex-col gap-3 text-[95%]">
            <Title title1={"Information de "} title2={"Livraison"} />
            <div className="flex gap-3">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
              />
              <input
                type="text"
                name="prenom"
                placeholder="Prénom"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
              />
            </div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
            />
            <input
              type="text"
              name="tel"
              placeholder="Téléphone"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
            />
            <input
              type="text"
              name="adresse"
              placeholder="Adresse"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
            />
            <div className="flex gap-3">
              <input
                type="text"
                name="ville"
                placeholder="Ville"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
              />
              <input
                type="text"
                name="region"
                placeholder="Région"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                name="codepostal"
                placeholder="Code postal"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
              />
              <input
                type="text"
                name="pays"
                placeholder="Pays"
                className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
              />
            </div>
          </div>
          {/* Côté droit */}
          <div className="flex flex-1 flex-col">
            <CartTotal />
            {/* Méthode de paiement */}
            <div className="my-6">
              <h3 className="bold-20 mb-5">Méthodes de <span className="text-secondary">paiement</span></h3>
              <div className="flex gap-3">
                <div 
                  onClick={()=> setMethode('stripe')}
                  className={`${method === "stripe" ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Carte bancaire</div>
                <div 
                  onClick={()=> setMethode('cod')}
                  className={`${method === "cod" ? "btn-dark" : "btn-white"} !py-1 text-xs cursor-pointer`}>Paiement à la livraison</div>
              </div>
            </div>

            {/* Bouton de validation de commande */}
            <div>
              <button 
                type='submit' 
                className="btn-secondary"
              >
                Passer la commande
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
