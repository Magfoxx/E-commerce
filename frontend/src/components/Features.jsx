import img1 from "../assets/features/feature1.png";
import img2 from "../assets/features/feature2.png";

const Features = () => {
  return (
    <section className="max-padd-container pt-14 pb-20">
      {/* Container */}
      <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-6 gap-y-12 rounded-xl">
        <div className="flexCenter gap-x-18">
          <div>
            <img
              src={img1}
              alt="image d'un homme qui pose sur un fond bleu, il porte des lunettes avec une tenu beige et chic"
              height={77}
              width={222}
              className="rounded-full"
            />
          </div>
          <div>
            <img
              src={img2}
              alt="image d'une femme qui pose sur un fond rose, elle porte des lunettes, un haut jaune et un pantalon rouge"
              height={77}
              width={222}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flexCenter flex-wrap sm:flex-nowrap gap-x-5">
          <div className="p-4 rounded-3xl">
            <h4 className="h4 capitalize">Produit de Qualité</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="p-4 rounded-3xl">
            <h4 className="h4 capitalize">Livraison rapide</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="p-4 rounded-3xl">
            <h4 className="h4 capitalize">Payement Sécurisé</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
