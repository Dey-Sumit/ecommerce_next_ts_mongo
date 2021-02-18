import { FunctionComponent } from "react";
import { FaShoppingBag } from "react-icons/fa";

const ProductCard: FunctionComponent<{
  name: string;
  imageUrl: string;
  price: string;
}> = ({ imageUrl, price, name }) => {
  return (
    <div className="flex flex-col justify-center px-12 py-8 shadow-md rounded-2xl bg-card">
      {/* //header */}
      <div className="flex justify-between text-gray-900">
        <FaShoppingBag size={15} />
        <FaShoppingBag size={15} />
      </div>
      <img src={imageUrl} alt={name} />
      <div className="my-1 text-center text-blue-700">
        <p className="font-bold ">{name}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
