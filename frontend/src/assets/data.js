import img1 from './product_1.png'
import img2_1 from './product_2_1.png'
import img2_2 from './product_2_2.png'
import img2_3 from './product_2_3.png'
import img2_4 from './product_2_4.png'
import img3 from './product_3.png'
import img4_1 from './product_4_1.png'
import img4_2 from './product_4_2.png'
import img4_3 from './product_4_3.png'
import img4_4 from './product_4_4.png'
import img5 from './product_5.png'
import img6 from './product_6.png'
import img7 from './product_7.png'
import img8 from './product_8.png'
import img9 from './product_9.png'
import img10 from './product_10.png'
import img11 from './product_11.png'
import img12 from './product_12.png'
import img13 from './product_13.png'
import img14 from './product_14.png'
import img15 from './product_15.png'
import img16 from './product_16.png'
import img17 from './product_17.png'
import img18 from './product_18.png'
import img19 from './product_19.png'
import img20 from './product_20.png'
import img21 from './product_21.png'
import img22 from './product_22.png'
import img23 from './product_23.png'
import img24 from './product_24.png'
import img25 from './product_25.png'
import img26 from './product_26.png'
import img27 from './product_27.png'
import img28 from './product_28.png'
import img29 from './product_29.png'
import img30 from './product_30.png'
import img31 from './product_31.png'
import img32 from './product_32.png'
import img33 from './product_33.png'
import img34 from './product_34.png'
import img35 from './product_35.png'
import img36 from './product_36.png'
import img37 from './product_37.png'
import img38 from './product_38.png'
import img39 from './product_39.png'
import img40 from './product_40.png'
import img41 from './product_41.png'
import img42 from './product_42.png'
import img43 from './product_43.png'
import img44 from './product_44.png'
import img45 from './product_45.png'
import img46 from './product_46.png'
import img47 from './product_47.png'
import img48 from './product_48.png'
import img49 from './product_49.png'
import img50 from './product_50.png'
import img51 from './product_51.png'
import img52 from './product_52.png'

// Blogs
import blog1 from "../assets/blogs/blog1.png"
import blog2 from "../assets/blogs/blog2.png"
import blog3 from "../assets/blogs/blog3.png"
import blog4 from "../assets/blogs/blog4.png"


export const products = [
    {
        _id: "1",
        name: "Haut élégant à col rond en coton",
        description: "Ce haut en coton léger est parfait pour les sorties décontractées, avec une coupe décontractée et un matériau durable.",
        price: 150,
        image: [img1],
        category: "Femme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        popular: false
    },
    {
        _id: "2",
        name: "T-shirt en coton premium pour hommes",
        description: "Un t-shirt haut de gamme offrant un confort exceptionnel et une texture lisse, idéal à porter au quotidien.",
        price: 220,
        image: [img2_1, img2_2, img2_3, img2_4],
        category: "Homme",
        subCategory: "Vêtements d'hiver",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        popular: false
    },
    {
        _id: "3",
        name: "Haut décontracté en coton pour filles",
        description: "Haut en coton doux pour fille, idéal pour le jeu actif et la détente.",
        price: 200,
        image: [img3],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["S", "L", "XL"],
        date: 1716234545448,
        popular: true
    },
    {
        _id: "4",
        name: "T-shirt décontracté classique pour hommes.",
        description: "Un t-shirt décontracté en coton respirant, adapté à toute occasion informelle.",
        price: 180,
        image: [img4_1, img4_2, img4_3, img4_4],
        category: "Homme",
        subCategory: "Hauts",
        sizes: ["S", "M", "XXL"],
        date: 1716621345448,
        popular: false
    },
    {
        _id: "5",
        name: "T-shirt basique stylé pour femme",
        description: "Un t-shirt essentiel en coton pour femmes, offrant simplicité et confort.",
        price: 140,
        image: [img5],
        category: "Femme",
        subCategory: "Vêtements d'hiver",
        sizes: ["M", "L", "XL"],
        date: 1716622345448,
        popular: false
    },
    {
        _id: "6",
        name: "T-shirt graphique pour enfants",
        description: "T-shirt graphique amusant et coloré, parfait pour jouer en extérieur et partir à l'aventure.",
        price: 160,
        image: [img6],
        category: "Enfants",
        subCategory: "Vêtements d'hiver",
        sizes: ["XS", "S", "M"],
        date: 1716623345448,
        popular: true
    },
    {
        _id: "7",
        name: "Pull léger en tricot doux pour femme",
        description: "Un pull léger en tricot confortable, idéal pour être superposé par temps frais.",
        price: 320,
        image: [img7],
        category: "Femme",
        subCategory: "Bas",
        sizes: ["S", "M", "L", "XL"],
        date: 1716624345448,
        popular: false
    },
    {
        _id: "8",
        name: "Sweat à capuche décontracté pour hommes",
        description: "Un sweat à capuche chaud et confortable avec une capuche ajustable et des poches avant.",
        price: 420,
        image: [img8],
        category: "Homme",
        subCategory: "Vêtements d'hiver",
        sizes: ["M", "L", "XL", "XXL"],
        date: 1716625345448,
        popular: true
    },
    {
        _id: "9",
        name: "Sweat à capuche confortable pour filles",
        description: "Un sweat à capuche décontracté conçu pour les filles, fabriqué avec un tissu doux pour un confort toute la journée.",
        price: 230,
        image: [img9],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["S", "M", "L"],
        date: 1716626345448,
        popular: false
    },
    {
        _id: "10",
        name: "Pantalon de jogging pour hommes",
        description: "Joggers à taille haute, parfaits pour un style décontracté, avec une coupe ample pour un confort optimal.",
        price: 260,
        image: [img10],
        category: "Homme",
        subCategory: "Bas",
        sizes: ["S", "M", "L", "XL"],
        date: 1716627345448,
        popular: false
    },
    {
        _id: "11",
        name: "Jean slim fit classique",
        description: "Un jean ajusté et élégant, parfait pour les tenues décontractées et habillées.",
        price: 380,
        image: [img11],
        category: "Homme",
        subCategory: "Hauts",
        sizes: ["M", "L", "XL"],
        date: 1716628345448,
        popular: true
    },
    {
        _id: "12",
        name: "Joggers de sport pour hommes",
        description: "Joggers confortables conçus pour les hommes actifs, avec une ceinture élastique pour un ajustement facile.",
        price: 170,
        image: [img12],
        category: "Homme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L"],
        date: 1716629345448,
        popular: false
    },
    {
        _id: "13",
        name: "Jean skinny fit pour femme",
        description: "Jean skinny tendance à taille mi-haute, parfait pour un look chic et moderne.",
        price: 290,
        image: [img13],
        category: "Femme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716630345448,
        popular: true
    },
    {
        _id: "14",
        name: "Pantalon cargo fonctionnel pour enfants",
        description: "Pantalon cargo robuste avec plusieurs poches, idéal pour les aventures en plein air.",
        price: 290,
        image: [img14],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["M", "L", "XL", "XXL"],
        date: 1716631345448,
        popular: false
    },
    {
        _id: "15",
        name: "Shorts d'aventure pour garçons",
        description: "Shorts confortables avec taille élastique, conçus pour les garçons actifs, idéaux pour jouer et les activités extérieures.",
        price: 150,
        image: [img15],
        category: "Enfants",
        subCategory: "Bas",
        sizes: ["XS", "S", "M"],
        date: 1716632345448,
        popular: true
    },
    {
        _id: "16",
        name: "Legging imprimé floral",
        description: "Legging doux et extensible avec imprimé floral, parfait pour allier confort et style.",
        price: 210,
        image: [img16],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["S", "M", "L"],
        date: 1716633345448,
        popular: true
    },
    {
        _id: "17",
        name: "Doudoune légère pour hommes",
        description: "Une doudoune élégante et chaude, idéale pour être portée en superposition par temps froid.",
        price: 490,
        image: [img17],
        category: "Homme",
        subCategory: "Bas",
        sizes: ["M", "L", "XL"],
        date: 1716634345448,
        popular: true
    },
    {
        _id: "18",
        name: "Trench-coat classique pour femmes",
        description: "Un trench-coat intemporel avec une coupe ajustée, parfait pour toute occasion.",
        price: 610,
        image: [img18],
        category: "Femme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716635345448,
        popular: false
    },
    {
        _id: "19",
        name: "Parka d'hiver pour garçons",
        description: "Une parka d'hiver chaude et résistante, conçue pour affronter les basses températures.",
        price: 350,
        image: [img19],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["S", "M", "L"],
        date: 1716636345448,
        popular: false
    },
    {
        _id: "20",
        name: "Jean classique en denim pour filles",
        description: "Un jean en denim polyvalent, idéal pour être porté en toute saison.",
        price: 260,
        image: [img20],
        category: "Femme",
        subCategory: "Bas",
        sizes: ["S", "M", "L"],
        date: 1716637345448,
        popular: true
    },
    {
        _id: "21",
        name: "Pull en laine mélangée pour femme",
        description: "Ce pull chaud en laine mélangée offre à la fois confort et élégance.",
        price: 360,
        image: [img21],
        category: "Femme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716638345448,
        popular: true
    },
    {
        _id: "22",
        name: "Jean robuste en denim pour hommes",
        description: "Veste en denim résistante avec une finition vintage, parfaite pour toutes les saisons.",
        price: 400,
        image: [img22],
        category: "Homme",
        subCategory: "Bas",
        sizes: ["M", "L", "XL"],
        date: 1716639345448,
        popular: false
    },
    {
        _id: "23",
        name: "Sweat à capuche en polaire pour enfants",
        description: "Un sweat à capuche en polaire doux et confortable, parfait pour les enfants actifs.",
        price: 190,
        image: [img23],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["S", "M", "L"],
        date: 1716640345448,
        popular: false
    },
    {
        _id: "24",
        name: "Blouson moto en simili cuir pour enfants",
        description: "Blouson tendance en simili cuir avec des détails zippés, apportant une touche moderne à toute tenue.",
        price: 470,
        image: [img24],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["S", "M", "L"],
        date: 1716641345448,
        popular: true
    },
    {
        _id: "25",
        name: "T-shirt d'hiver pour enfants",
        description: "T-shirt doux et chaud, idéal pour l’hiver avec une coupe confortable.",
        price: 100,
        image: [img25],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["M", "L"],
        date: 1716642345448,
        popular: true
    },
    {
        _id: "26",
        name: "Écharpe en cachemire pour femme",
        description: "Écharpe élégante en cachemire, idéale pour ajouter chaleur et luxe à votre tenue.",
        price: 80,
        image: [img26],
        category: "Femme",
        subCategory: "Accessoires",
        sizes: ["Taille unique"],
        date: 1716643345448,
        popular: false
    },
    {
        _id: "27",
        name: "Bonnet douillet pour enfants",
        description: "Bonnet chaud et confortable, parfait pour protéger les enfants du froid.",
        price: 60,
        image: [img27],
        category: "Enfants",
        subCategory: "Accessoires",
        sizes: ["Taille unique"],
        date: 1716644345448,
        popular: false
    },
    {
        _id: "28",
        name: "Ceinture en cuir classique pour hommes",
        description: "Ceinture en cuir de haute qualité avec une boucle robuste, idéale pour un look formel.",
        price: 140,
        image: [img28],
        category: "Homme",
        subCategory: "Accessoires",
        sizes: ["M", "L", "XL"],
        date: 1716645345448,
        popular: false
    },
    {
        _id: "29",
        name: "Chapeau de soleil pour femme",
        description: "Chapeau à large bord, parfait pour les journées à la plage et les activités en plein air.",
        price: 120,
        image: [img29],
        category: "Femme",
        subCategory: "Accessoires",
        sizes: ["Taille unique"],
        date: 1716646345448,
        popular: true
    },
    {
        _id: "30",
        name: "Lunettes de soleil polarisées pour enfants",
        description: "Lunettes de soleil polarisées stylées offrant une excellente protection UV.",
        price: 60,
        image: [img30],
        category: "Enfants",
        subCategory: "Accessoires",
        sizes: ["Taille unique"],
        date: 1716647345448,
        popular: true
    },
    {
        _id: "31",
        name: "T-shirt en coton pur à col rond pour hommes",
        description: "Un t-shirt léger et tricoté, avec une coupe ajustée, un col rond et des manches courtes, idéal en sous-vêtement ou en vêtement extérieur.",
        price: 220,
        image: [img31],
        category: "Homme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716645345448,
        popular: false
    },
    {
        _id: "32",
        name: "T-shirt en coton pur à col rond pour hommes",
        description: "Un t-shirt doux et respirant, parfait pour un look décontracté ou à superposer sous une veste.",
        price: 250,
        image: [img32],
        category: "Homme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716646445448,
        popular: false
    },
    {
        _id: "33",
        name: "T-shirt en coton à col rond pour filles",
        description: "T-shirt léger en coton avec une coupe ajustée et un col rond, parfait pour toutes les occasions.",
        price: 230,
        image: [img33],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716647545448,
        popular: false
    },
    {
        _id: "34",
        name: "Haut en coton à col rond pour femmes",
        description: "Un haut tricoté léger et ajusté, parfait pour être porté seul ou en superposition.",
        price: 260,
        image: [img34],
        category: "Femme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716648645448,
        popular: false
    },
    {
        _id: "35",
        name: "Veste décontractée à fermeture éclair pour femmes",
        description: "Une veste légère et décontractée avec une fermeture éclair, idéale pour la mi-saison.",
        price: 240,
        image: [img35],
        category: "Femme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716649745448,
        popular: false
    },
    {
        _id: "36",
        name: "T-shirt noir à fermeture éclair pour femmes",
        description: "T-shirt élégant avec fermeture éclair sur le devant, parfait pour un look tendance.",
        price: 270,
        image: [img36],
        category: "Femme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716650845448,
        popular: false
    },
    {
        _id: "37",
        name: "Haut en coton à col rond pour femme",
        description: "Un t-shirt tricoté léger avec une coupe ajustée, un col rond et des manches courtes, idéal à porter seul ou sous un vêtement.",
        price: 250,
        image: [img37],
        category: "Femme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716651945448,
        popular: false
    },
    {
        _id: "38",
        name: "T-shirt en coton pur à col rond pour enfants",
        description: "Un t-shirt confortable et respirant, parfait pour les jeux et les sorties quotidiennes.",
        price: 280,
        image: [img38],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716653045448,
        popular: false
    },
    {
        _id: "39",
        name: "Chemise en coton imprimé pour homme",
        description: "Une chemise en coton respirante avec des imprimés modernes, parfaite pour une tenue décontractée.",
        price: 260,
        image: [img39],
        category: "Homme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716654145448,
        popular: false
    },
    {
        _id: "40",
        name: "Veste en denim slim fit pour hommes",
        description: "Une veste en denim élégante et moderne, idéale pour un look urbain.",
        price: 290,
        image: [img40],
        category: "Homme",
        subCategory: "Vêtements d'hiver",
        sizes: ["S", "M", "L", "XL"],
        date: 1716655245448,
        popular: false
    },
    {
        _id: "41",
        name: "T-shirt en coton à col rond pour hommes",
        description: "Un t-shirt simple et confortable, idéal pour un usage quotidien.",
        price: 270,
        image: [img41],
        category: "Homme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716656345448,
        popular: false
    },
    {
        _id: "42",
        name: "T-shirt en coton à col rond pour garçons",
        description: "Un t-shirt léger et doux pour enfants, parfait pour l'été.",
        price: 300,
        image: [img42],
        category: "Enfants",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716657445448,
        popular: false
    },
    {
        _id: "43",
        name: "Pantalon ajusté pour enfants",
        description: "Pantalon coupe ajustée avec un tissu confortable, idéal pour les aventures quotidiennes.",
        price: 280,
        image: [img43],
        category: "Enfants",
        subCategory: "Bas",
        sizes: ["S", "M", "L", "XL"],
        date: 1716658545448,
        popular: false
    },
    {
        _id: "44",
        name: "Veste décontractée à fermeture éclair pour femmes",
        description: "Une veste intemporelle avec une coupe décontractée, parfaite pour les soirées fraîches.",
        price: 310,
        image: [img44],
        category: "Femme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716659645448,
        popular: false
    },
    {
        _id: "45",
        name: "Veste en denim slim fit pour hommes",
        description: "Une veste en denim classique avec une coupe ajustée pour un look tendance.",
        price: 290,
        image: [img45],
        category: "Homme",
        subCategory: "Vêtements d'hiver",
        sizes: ["S", "M", "L", "XL"],
        date: 1716660745448,
        popular: false
    },
    {
        _id: "46",
        name: "Chemise en denim slim fit pour hommes",
        description: "Une chemise en denim élégante avec un design moderne et une coupe ajustée.",
        price: 320,
        image: [img46],
        category: "Homme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716661845448,
        popular: false
    },
    {
        _id: "47",
        name: "Pantalon ajusté pour enfants",
        description: "Un pantalon élégant avec une coupe fuselée, parfait pour une tenue habillée ou décontractée.",
        price: 300,
        image: [img47],
        category: "Enfants",
        subCategory: "Bas",
        sizes: ["S", "M", "L", "XL"],
        date: 1716662945448,
        popular: false
    },
    {
        _id: "48",
        name: "Veste en denim slim fit pour hommes",
        description: "Une veste en denim polyvalente avec une coupe élégante, parfaite pour l’automne et l’hiver.",
        price: 330,
        image: [img48],
        category: "Homme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716664045448,
        popular: false
    },
    {
        _id: "49",
        name: "Pantalon slim fit pour femmes",
        description: "Pantalon ajusté avec un tissu confortable, idéal pour une tenue chic et décontractée.",
        price: 310,
        image: [img49],
        category: "Femme",
        subCategory: "Bas",
        sizes: ["S", "M", "L", "XL"],
        date: 1716665145448,
        popular: false
    },
    {
        _id: "50",
        name: "Pantalon ajusté pour enfants",
        description: "Pantalon en coton doux, parfait pour les sorties décontractées ou l’école.",
        price: 340,
        image: [img50],
        category: "Enfants",
        subCategory: "Bas",
        sizes: ["S", "M", "L", "XL"],
        date: 1716666245448,
        popular: false
    },
    {
        _id: "51",
        name: "Chemise décontractée à fermeture éclair pour femmes",
        description: "Une chemise moderne avec une fermeture éclair pour un look sophistiqué.",
        price: 320,
        image: [img51],
        category: "Femme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716667345448,
        popular: false
    },
    {
        _id: "52",
        name: "Chemise en denim slim fit pour hommes",
        description: "Un classique intemporel, cette chemise en denim apporte un style décontracté et élégant.",
        price: 350,
        image: [img52],
        category: "Homme",
        subCategory: "Hauts",
        sizes: ["S", "M", "L", "XL"],
        date: 1716668445448,
        popular: false
    }
]

export const blogs = [
    { title: "Top Shopping Tips for Smart Buyers", category: "Men", image: blog1 },
    { title: "Latest Trends in Online Shopping 2024", category: "Women", image: blog2 },
    { title: "How to Spot the Best Deals Online", category: "Kids", image: blog3 },
    { title: "Why E-Commerce is the Future of Shopping", category: "Topwear", image: blog4 }
]