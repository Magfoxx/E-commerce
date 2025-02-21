import { useState } from "react";
import login from "../assets/loginImg.png";
import axios from "axios";
import { backend_url } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backend_url + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* Container */}
      <div className="flex h-full w-full">
        {/* Côté image */}
        <div className="w-1/2 hidden sm:block">
          <img
            src={login}
            alt="image login"
            className="object-cover h-full w-full"
          />
        </div>
        {/* Coté formulaire */}
        <div className="flexCenter w-full sm:w-1/2">
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 text-gay-800"
          >
            <div className="w-full mb-4">
              <h3 className="bold-36">Connexion</h3>
            </div>
            <div className="w-full">
              <label htmlFor="email" className="medium-15">
                Email
              </label>
              <input
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
                autoComplete="email"
                className="w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="medium-15">
                Mot de passe
              </label>
              <input
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Mot de passe"
                required
                autoComplete="current-password"
                className="w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1"
              />
            </div>
            <button type="submit" className="btn-dark w-full mt-5 !py-[9px]">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
