import { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  // Données temporaire
  useEffect(() => {
    const data = products.slice(0, 5);
    setOrderData(data);
  }, [products]);

  return (
    <div>
      <div className="bg-primary mb-16">
        {/* Container */}
        <div className="max-padd-container py-16">
          <Title title1={"Liste des"} title2={"Commandes"} />
          {/* Container */}
          {orderData.map((item, i) => (
            <div key={i} className="bg-white p-2 mt-3 rounded-lg">
              <div className="text-gray-700 flex flex-col gap-4">
                <div className="flex gap-x-3 w-full">
                  {/* image */}
                  <div className="flex gap-6">
                    <img
                      src={item.image[0]}
                      alt="image de la commande"
                      className="sm:w-[77px] rounded-lg"
                    />
                  </div>
                  {/* info commande */}
                  <div className="block w-full">
                    <h5 className="h5 capitalize line-clamp-1">{item.name}</h5>
                    <div className="flexBetween flex-wrap">
                      <div>
                        <div className="flex items-center gap-x-2 sm:gap-x-3">
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Prix :</h5>
                            <p>
                              {item.price} {currency}
                            </p>
                          </div>
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Quantité :</h5>
                            <p>{item.quantity}</p>
                          </div>
                          <div className="flexCenter gap-x-2">
                            <h5 className="medium-14">Taille :</h5>
                            <p>{item.size}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <h5 className="medium-14">Date :</h5>
                          <p>{new Date(item.date).toDateString()}</p>
                        </div>
                        <div className="flex items-center gap-x-2">
                          <h5 className="medium-14">Paiement</h5>
                          <p>{"factice"}</p>
                        </div>
                      </div>
                      {/* Status & boutton */}
                      <div className="flex gap-3">
                        <div className="flex items-center gap-1">
                          <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                          <p>{item.status}</p>
                        </div>
                        <button className="btn-secondary !p-1.5 !py-1 !text-xs">
                          Suivre la commande
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
