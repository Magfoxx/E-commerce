import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"

// Fonction qui contrôle l'ajout d'un produit
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, popular } = req.body

    // Extraire les images si elles sont fournies
    const image1 = req.files?.image1?.[0];
    const image2 = req.files?.image2?.[0];
    const image3 = req.files?.image3?.[0];
    const image4 = req.files?.image4?.[0];

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined)

    // Télécharger des images sur Cloudinary ou utiliser des images par défaut
    let imagesUrl;
    if (images.length > 0) {
      imagesUrl = await Promise.all(
        images.map(async (item) => {
          const result = await cloudinary.uploader.upload(item.path, { ressource_type: "image" })
          return result.secure_url
        })
      )
    } else {
      // URL de l'image par défaut si aucune images n'est fournie
      imagesUrl = ["http://via.placeholder.com/150"]
    }

    // Créer des données produit
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      popular: popular == "true" ? true : false,
      sizes: sizes ? JSON.parse(sizes) : [], // Par défaut, un tableau vide si les tailles ne sont pas fournies
      image: imagesUrl,
      date: Date.now()
    }

    console.log(productData)

    const product = new productModel(productData)
    await product.save()

    res.json({ success: true, message: "Produit ajouté" })

  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }

}

// fonction qui contrôle la suppréssion d'un produit
const removeProduct = async (req, res) => {

}

// fonction qui contrôle les détails d'un seul produit
const singleProduct = async (req, res) => {

}

// Fonction qui contrôle la liste produit
const listProduct = async (req, res) => {

}

export { addProduct, removeProduct, singleProduct, listProduct }