import { RiSecurePaymentLine } from "react-icons/ri";
import { TbArrowBackUp, TbTruckDelivery } from "react-icons/tb";


const ProductFeatures = () => {
  return (
    <section>
      <div className="bg-primary rounded-xl mt-6">
        {/* Retour facile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl">
          <div className="flexCenter gap-x-4 p-2 rounded-3xl">
            <div className="text-3xl">
              <TbArrowBackUp className="mb-3 text-yellow-500" />
            </div>
            <div>
              <h4 className="h4 capitalize">Retour facile</h4>
              <p>
                Nous facilitons vos retours ! Si un produit ne correspond pas à
                vos attentes, profitez d’un processus de retour simplifié et
                rapide. Votre satisfaction est notre priorité.
              </p>
            </div>
          </div>
          {/* Livraison rapide */}
          <div className="flexCenter gap-x-4 p-2 rounded-3xl">
            <div className="text-3xl">
              <TbTruckDelivery className="mb-3 text-red-500" />
            </div>
            <div>
              <h4 className="h4 capitalize">Livraison rapide</h4>
              <p>
                Recevez vos articles en un temps record grâce à notre service de
                livraison rapide et fiable. Commandez aujourd'hui, soyez livré
                demain !
              </p>
            </div>
          </div>
          {/* Paiement sécurisé */}
          <div className="flexCenter gap-x-4 p-2 rounded-3xl">
            <div className="text-3xl">
              <RiSecurePaymentLine className="mb-3 text-secondary" />
            </div>
            <div>
              <h4 className="h4 capitalize">Paiement sécurisé</h4>
              <p>
                Achetez en toute tranquillité ! Nous utilisons les dernières
                technologies de sécurité pour protéger vos informations et
                garantir des transactions 100 % sécurisées.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
