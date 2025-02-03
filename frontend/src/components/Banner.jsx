import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="mx-auto max-w[1440px] mt-6">
      <div className="flexBetween bg-white">
        {/* Côté Gauche */}
        <div className="hidden lg:block flex-1 px-6 xl:px-12">
          <h2 className="h2 uppercase">L’élégance à prix doux, un charme intemporel.</h2>
          <h3 className="h4 uppercase">Transformez votre garde-robe dès aujourd'hui</h3>
          <div className="flex mt-5">
            <Link to={"/collection"} className="btn-secondary !py-0 !pr-0 rounded-full flexCenter gap-x-2 group">
              Voir la collection
              <FaArrowRight className="bg-white text-tertiary rounded-full h-9 w-9 p-3 m-[3px] group-hover:-rotate-[20deg] transition-all duration-500"/>
            </Link>
          </div>
        </div>
        {/* Côté Droit Image */}
        <div className="flex-1">
          <img 
            src={banner} 
            alt="Deux jeunes femmes souriantes portant des lunettes de soleil modernes, posant joyeusement sur un fond pastel avec des motifs floraux. L’image dégage une ambiance estivale et amusante."
            className="rounded-tl-3xl rounded-bl-3xl" 
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
