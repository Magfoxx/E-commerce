import { FaCheck, FaStar } from "react-icons/fa6";
import Title from "../components/Title";
import user1 from "../assets/testimonials/user1.png";
import user2 from "../assets/testimonials/user2.png";
import product1 from "../assets/product_1.png";
import product2 from "../assets/product_2_1.png";
import product3 from "../assets/product_3.png";
import product4 from "../assets/product_6.png";

const Testimonials = () => {
  return (
    <div>
      <div className="bg-primary mb-16">
        <div className="max-padd-container py-10">
          {/* Container principal */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-20 mb-16 rounded-2xl">
            {/* Colonne gauche - Texte et notation */}
            <div className="flex items-start justify-between flex-col gap-10">
              <Title
                title1="Nos clients "
                title2="témoignent"
                titleStyles="text-3xl"
                paraStyles="text-gray-600"
              />
              <p className="text-gray-500 text-lg">
                Découvrez les meilleures offres sur des produits de qualité
                supérieure, conçus pour améliorer votre expérience quotidienne.
              </p>
              {/* Avis total */}
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md w-fit">
                <div className="flex text-yellow-400 gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-gray-700 font-semibold">
                  Plus de <b>+25 000 avis</b>
                </span>
              </div>
            </div>

            {/* Colonne droite - Avis des clients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Carte Avis - John Doe */}
              <div className="flex flex-col gap-4 rounded-lg p-6 bg-white shadow-lg border border-gray-200">
                {/* Profil */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={user1}
                      alt="John Doe"
                      className="w-12 h-12 rounded-full"
                    />
                    <h5 className="font-bold text-gray-800">John Doe</h5>
                  </div>
                  <div className="bg-blue-500 text-white rounded-full flex items-center gap-2 px-3 py-1 text-sm font-semibold">
                    <FaCheck />
                    Vérifié
                  </div>
                </div>
                {/* Séparateur */}
                <hr className="h-[1px] w-full bg-gray-200 my-2" />
                {/* Évaluation */}
                <div className="flex gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4 className="text-lg font-semibold">Haute qualité</h4>
                <p className="text-gray-600 text-sm">
                  J'ai été impressionné par la qualité des produits et la
                  rapidité de la livraison. Le service client est également au
                  top, toujours à l'écoute et réactif. Je recommande vivement !
                </p>
                {/* Images produits */}
                <div className="flex gap-2 mt-3">
                  <img
                    src={product1}
                    alt="image du produit"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <img
                    src={product2}
                    alt="image du produit"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
              </div>

              {/* Carte Avis - Izabella Stress */}
              <div className="flex flex-col gap-4 rounded-lg p-6 bg-white shadow-lg border border-gray-200">
                {/* Profil */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img
                      src={user2}
                      alt="Izabella Stress"
                      className="w-12 h-12 rounded-full"
                    />
                    <h5 className="font-bold text-gray-800">Izabella Stress</h5>
                  </div>
                  <div className="bg-blue-500 text-white rounded-full flex items-center gap-2 px-3 py-1 text-sm font-semibold">
                    <FaCheck />
                    Vérifié
                  </div>
                </div>
                {/* Séparateur */}
                <hr className="h-[1px] w-full bg-gray-200 my-2" />
                {/* Évaluation */}
                <div className="flex gap-1 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h4 className="text-lg font-semibold">Design moderne</h4>
                <p className="text-gray-600 text-sm">
                  Le design du produit est magnifique et dépasse mes attentes.
                  Très fonctionnel et élégant, il apporte une vraie valeur
                  ajoutée à mon quotidien. Un achat que je ne regrette pas !
                </p>
                {/* Images produits */}
                <div className="flex gap-2 mt-3">
                  <img
                    src={product3}
                    alt="image du produit"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <img
                    src={product4}
                    alt="image du produit"
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
