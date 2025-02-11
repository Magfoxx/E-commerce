import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Établir la connexion
    await mongoose.connect(process.env.MONGO_URI)
    console.log('✅ Base de données connectée');
  } catch (error) {
    console.error("❌ Échec de la connexion à la base de données : ", error.message)
  }
}

export default connectDB