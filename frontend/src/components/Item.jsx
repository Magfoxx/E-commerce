import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Item = ({ product }) => {
  return (
    <div className="bottom-12 relative">
      {/* Image */}
      <Link className="flexCenter relative top-12 overflow-hidden pb-3 rounded-t-2xl">
        <img src={product.image[0]} alt={product.name} />
      </Link>
      {/* Info */}
      <div className="p-3 rounded-lg pt-12 bg-white shadow">
        <h4 className="bold-15 line-clamp-1 !my-0">{product.name}</h4>
        <div className="flexBetween pt-1">
          <h5 className="h5 pr-2">{product.price}.00 €</h5>
          <div className="flex items-baseline gap-x-1">
            <FaStar className="text-secondary" />
            <h5 className="h5 relative bottom-0">4.8</h5>
          </div>
        </div>
        <p className="line-clamp-2 py-0.5">{product.description}</p>
      </div>
    </div>
  );
};

export default Item;
