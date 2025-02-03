import { useState, useEffect } from "react";
// Import de composants
import Title from "./Title";
import Item from "./Item";
// Import du composant Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
// Import des styles Swiper
import "swiper/css";
import "swiper/css/pagination";
// Import des modules requis
import { Autoplay, Pagination } from "swiper/modules";
import { products } from "../assets/data";

const NewArrivals = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    if (products?.length) {
      setNewArrivals(products.slice(0, 10));
    }
  }, []);

  return (
    <section className="max-padd-container pt-16 pb-6 bg-primary">
      <Title title1={"Dernières"} title2={"Nouveautés"} titleStyles={"pb-10"} paraStyles={"!block"}/>
      {/* Swiper Container */}
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 30 },
          400: { slidesPerView: 2, spaceBetween: 30 },
          700: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
          1200: { slidesPerView: 5, spaceBetween: 30 },
        }}
        modules={[Autoplay, Pagination]}
        className="h-[555px] sm:h-[411px] md:h-[488px]"
      >
        {newArrivals.map((product) => (
          <SwiperSlide key={product._id} className="w-auto">
            <Item product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default NewArrivals;