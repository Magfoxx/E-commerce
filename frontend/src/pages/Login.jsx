import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import login from "../assets/login.png";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [currState, setCurrState] = useState("Se connecter");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currState === "S'inscrire") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

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
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5"
          >
            <div className="w-full mb-4">
              <h3 className="bold-36">{currState}</h3>
            </div>
            {currState === "S'inscrire" && (
              <div className="w-full">
                <label htmlFor="name" className="medium-15">
                  Nom
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Mot de passe"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1 outline-black"
                required
              />
            </div>
            <button
              type="submit"
              className="btn-dark w-full mt-5 !py-[8px] !rounded cursor-pointer"
            >
              {currState === "S'inscrire" ? "S'inscrire" : "Se connecter"}
            </button>
            <div className="w-full flex flex-col gap-y-3">
              <div className="underline medium-15">Mot de passe oublié ?</div>
              {currState === "Se connecter" ? (
                <div className="underline medium-15">
                  Je n'ai pas de compte ?
                  <span
                    onClick={() => setCurrState("S'inscrire")}
                    className="cursor-pointer"
                  >
                    {" "}
                    Créer un compte
                  </span>
                </div>
              ) : (
                <div className="underline medium-15 c">
                  J'ai déjà un compte ?
                  <span
                    onClick={() => setCurrState("Se connecter")}
                    className="cursor-pointer"
                  >
                    {" "}
                    Se connecter
                  </span>
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
