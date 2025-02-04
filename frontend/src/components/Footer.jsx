import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaQuestion } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="max-padd-container flex items-start justify-between flex-col lg:flex-row gap-8 py-6 mb-7 bg-primary">
        <div>
          <h4 className="h4">Nous sommes toujours là pour vous aider</h4>
          <p>
            Votre satisfaction est notre priorité. N'hésitez pas à nous
            contacter pour toute question ou assistance.
          </p>
        </div>
        <div className="flexStart flex-wrap gap-8">
          <div className="flexCenter gap-x-6">
            <FaLocationDot />
            <div>
              <h5 className="h5">Adresse</h5>
              <p>
                123 Rue de Mars, <br />
                75001 Paris, France
              </p>
            </div>
          </div>
          <div className="flexCenter gap-x-6">
            <FaPhone />
            <div>
              <h5 className="h5">Téléphone</h5>
              <p>+33123456789</p>
            </div>
          </div>
          <div className="flexCenter gap-x-6">
            <FaMailBulk />
            <div>
              <h5 className="h5">Support par mail</h5>
              <p>info@outfiro.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-padd-container flex items-start justify-between flex-wrap gap-12 mt-12">
        {/* logo - Partie gauche */}
        <div className="flex flex-col max-w-sm gap-y-5">
          <div className="bold-32">
            Outfir<span className="text-secondary">o</span>
          </div>
          <p>
            Découvrez notre engagement à offrir des produits de qualité et un
            service exceptionnel, au-delà de vos attentes.
          </p>
        </div>
        <div className="flexStart gap-7 xl:gap-x-36 flex-wrap">
          <ul>
            <h4 className="h4 mb-3">Service Client</h4>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Centre d'aide
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Modes de paiement
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Contact
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Suivi de livraison
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Réclamations
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="h4 mb-3">Légal</h4>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Politique de confidentialité
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Paramètres des cookies
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Conditions générales
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Annulations
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Mentions légales
              </a>
            </li>
          </ul>
          <ul>
            <h4 className="h4 mb-3">Autres</h4>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Nos équipes
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Durabilité
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Presse
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Offres d'emploi
              </a>
            </li>
            <li className="my-2">
              <a href="" className="text-gray-30 regular-14 ">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <p className="max-padd-container bg-primary medium-14 py-2 px-8 rounded flexBetween mt-6">
        <span>2025 Outfiro</span>
        <span>Tous droits réservés</span>
      </p>
    </footer>
  );
};

export default Footer;
