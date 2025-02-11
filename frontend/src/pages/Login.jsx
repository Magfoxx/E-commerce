import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import login from "../assets/login.png";

const Login = () => {
  const { token, setToken, navigate } = useContext(ShopContext);
  const [currState, setCurrState] = useState("S'inscrire");

  return (
    <div className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* Container */}
      <div className="flex h-full w-full">
        {/* Coté image */}
        <div className="w-1/2 hidden sm:block">
          <img
            src={login}
            alt="imag de connexion"
            className="object-cover h-full w-full"
          />
        </div>
        {/* coté formulaire */}
        <div className="flex w-full sm:w-1/2 items-center justify-center text-[90%]">
          <form className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5">
            <div className="w-full mb-4">
              <h3 className="bold-36">{currState}</h3>
            </div>
            {currState === "S'inscrire" && (
              <div className="w-full">
                <label htmlFor="name" className="medium-15">
                  Nom
                </label>
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 outline-black"
                  required
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="email" className="medium-15">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 outline-black"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="medium-15">
                Mot de passe
              </label>
              <input
                type="text"
                placeholder="Mot de passe"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 outline-black"
                required
              />
            </div>
            <button className="btn-dark w-full mt-5 !py-[8px] !rounded">
              {currState === "S'inscrire" ? "S'inscrire" : "Se connecter"}
            </button>
            <div className="w-full flex flex-col gap-y-3">
              <div className="underline medium-15">Mot de passe oublié ?</div>
              {currState === "Se connecter" ? (
                <div className="underline medium-15">
                  Je n'ai pas de compte ?<span onClick={() => setCurrState("S'inscrire")} className="cursor-pointer"> Créer un compte</span>
                </div>
              ) : (
                <div className="underline medium-15">
                  J'ai déjà un compte ?<span onClick={() => setCurrState("Se connecter")} className="cursor-pointer"> Se connecter</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
