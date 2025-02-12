import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Fonction pour crer le token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
};

// Fonction du contrôleur pour la connexion de l'utilisateur
export const loginUser = async (req, res) => {

};

// Fonction du contrôleur pour l'enregistrement de l'utilisateur
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Vérifier si l'utilisateur existe déjà
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({
        success: false,
        message: "L'utilisateur existe déjà !",
      });
    }
    // Validation du mot de passe et vérification de la chaîne du mot de passe
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Veuillez entrer un email valide",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Veuillez entrer un mot de passe plus fort",
      });
    }

    // Hachage du mot de passe de l'utilisateur
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
};

// Fonction du contrôleur pour la connexion de l'admin
export const adminLogin = async (req, res) => {

};

export default { loginUser, registerUser, adminLogin };
