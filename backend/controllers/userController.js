import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Fonction pour crer le token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
};

// Fonction qui contrôle la connexion de l'utilisateur
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
      return res.json({ success: false, message: "L'utilisateur n'existe pas !" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      const token = createToken(user._id)
      res.json({ success: true, token })
    } else {
      res.json({ success: false, message: "Informations d'identification invalides" })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
};

// Fonction qui contrôle l'enregistrement de l'utilisateur
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

// Fonction qui contrôle la connexion de l'admin
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET)
      res.json({ success: true, token })
    } else {
      res.json({
        success: false, message: "Informations d'identification non valides"
      })
    }
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
};

export default { loginUser, registerUser, adminLogin };
