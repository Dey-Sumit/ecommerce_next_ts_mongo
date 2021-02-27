import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { FaShoppingBag } from "react-icons/fa";

import { ProductCreate } from "../models/Product";
//TODO fix this , this interface 👆 should not be coming from models :(

const ProductCard: FunctionComponent<{
  data: ProductCreate;
}> = ({ data: { imageUrl, price, name, _id } }) => {
  const { push } = useRouter();

  return (
    <div
      className="flex flex-col justify-center px-12 py-8 shadow-md rounded-2xl bg-card"
      onClick={() => push(`/product/${_id}`)}
    >
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
