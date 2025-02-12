import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// Configuration de l'application
const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// API point d'entrée
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("Fonctionnement de l'API");
});

app.listen(port, () =>
  console.log("Le serveur fonctionne sur le port : " + port)
);
