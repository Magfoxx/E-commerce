# 📦 MERN Stack - Site E-commerce **Outfiro**

Bienvenue dans ce projet de **site e-commerce moderne** développé avec la stack **MERN** : MongoDB, Express.js, React.js et Node.js. 🚀

Ce projet est basé sur un tutoriel créé par **CodeAtUsman** et a été réadapté par **Magfoxx** pour exploiter **les dernières versions des outils et technologies modernes**, notamment **Tailwind CSS v4**.

---

## ✨ **Description du projet**

Ce projet met en œuvre les **fonctionnalités essentielles** d’un site e-commerce complet et dynamique. Son objectif est d’apprendre à construire un système robuste comprenant :
- La gestion des **produits**, des **utilisateurs** et des **commandes**.
- L’intégration d’un **panneau d’administration** pour faciliter la gestion de l’application.

### **Objectifs pédagogiques**
- Découvrir les **bases de la stack MERN**.
- Maîtriser le développement d’applications **full-stack modernes**.
- Mettre en œuvre des fonctionnalités **CRUD** (Create, Read, Update, Delete).
- Déployer une application **scalable et performante**.

---

## 🔧 **Technologies utilisées**

### **1. Front-end : React.js et Tailwind CSS v4**
- Développement d’une interface utilisateur **réactive** et **conviviale**.
- Gestion de l’état avec **React Hooks**.
- Utilisation de **Tailwind CSS v4** pour un design moderne et optimisé, avec les dernières fonctionnalités :
  - `@theme` pour la gestion des thèmes.
  - `@utility` pour les classes personnalisées.
- Navigation entre les pages avec **React Router**.

### **2. Back-end : Node.js et Express.js**
- Création d’une API RESTful performante.
- Gestion des routes sécurisées et des contrôleurs pour les fonctionnalités CRUD.

### **3. Base de données : MongoDB**
- Base de données **NoSQL** pour le stockage des produits, utilisateurs et commandes.
- Modélisation des données avec **Mongoose**.

### **4. Outils supplémentaires**
- **JWT (JSON Web Tokens)** : Authentification sécurisée.
- **Bcrypt** : Chiffrement des mots de passe.
- **ESLint et Prettier** : Code propre et standardisé.
- **Vite** : Environnement de développement **ultra-rapide**.

---

## 🎯 **Fonctionnalités principales**

1. **Gestion des produits**
   - Ajout, modification, suppression et affichage des produits.
   - Intégration des images des produits avec description détaillée.

2. **Gestion des utilisateurs**
   - Création et gestion des comptes utilisateurs.
   - Authentification sécurisée avec **JWT (JSON Web Tokens)**.

3. **Gestion des commandes**
   - Création, mise à jour et suivi des commandes des clients.
   - Historique des commandes accessible via le panneau d’administration.

4. **Panneau d’administration**
   - Interface intuitive pour gérer les produits, utilisateurs et commandes.
   - Système de rôles (utilisateur/admin) pour sécuriser les fonctionnalités sensibles.

---

## 📚 **Prérequis**

Pour exécuter ce projet, vous devez avoir :
- **Node.js** installé sur votre machine.
- Une instance de **MongoDB** (locale ou via un service cloud comme MongoDB Atlas).
- Un gestionnaire de paquets comme **npm** ou **yarn**.

---

## 🚀 **Comment lancer le projet**

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/Magfoxx/E-commerce.git
   cd e-commerce
   ```

2. **Installez les dépendances pour le back-end et le front-end :**
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3.	**Configurez les variables d’environnement :**
-	Créez un fichier .env dans le dossier backend avec les clés nécessaires :
   ```env
   MONGO_URI=votre-url-mongodb
   JWT_SECRET=votre-clé-secrète
   PORT=5000
   ```

4.	**Démarrez le projet :**
-	Back-end :
   ```bash
   cd backend
   npm start
   ```

-	Front-end :
   ```bash
   cd frontend
   npm start
   ```

5.	**Accédez à l’application :**
-	Ouvrez votre navigateur à l’adresse http://localhost:3000.

## 🛠️ Améliorations futures
-	Intégration d’une passerelle de paiement (Stripe ou PayPal).
-	Gestion avancée des rôles utilisateurs.
-	Notifications en temps réel (WebSocket ou Socket.IO).
-	Recherche avancée avec filtrage dynamique.

## **💡 Conclusion**

Ce projet est une opportunité idéale pour apprendre les bases et concepts avancés de la stack MERN tout en utilisant les dernières technologies modernes. Que vous soyez débutant ou développeur expérimenté, ce projet est un excellent moyen de renforcer vos compétences en développement full-stack.

✨ Apprenez, développez et amusez-vous ! 🚀

💻 Auteur du tutoriel original : CodeAtUsman
🎨 Réadapté par : Magfoxx
📫 Contact : hamcha.martial@gmail.com
🌐 Lien du dépôt GitHub : (https://github.com/Magfoxx/E-commerce)