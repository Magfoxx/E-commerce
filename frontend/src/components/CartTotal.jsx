import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, getCartAmount, delivery_charges } = useContext(ShopContext);

  return (
    <section className="w-full">
      <Title title1={"Panier"} title2={"Total"} titleStyles={"h3"} />
      <div className="flexBetween pt-3">
        <h5 className="h5">Total :</h5>
        <p className="h5">
          {getCartAmount()}.00 {currency}
        </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
      <div className="flexBetween pt-3">
        <h5 className="h5">Frais d'expédition :</h5>
        <p className="h5">{getCartAmount() === 0 ? "0,00" : `${delivery_charges}.00 ${currency}`}</p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
      <div className="flexBetween pt-3">
        <h5 className="h5">Total TTC :</h5>
        <p className="h5">{getCartAmount() === 0 ? "0,00" : getCartAmount() + delivery_charges} {currency} </p>
      </div>
      <hr className="mx-auto h-[1px] w-full bg-gray-900/10 my-1" />
    </section>
  );
};

export default CartTotal;
