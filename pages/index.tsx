import { seedProducts } from "../seeder";
import { HiMenu } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import classnames from "classnames";

const index = ({ products }) => {
  // console.log(products)

  const getMenShoes = () => {
    setActive("Men");
  };
  const getWomenShoes = () => {
    setActive("Women");
  };

  const [active, setActive] = useState<"Men" | "Women">("Men");

  return (
    <div className="overflow-hidden">
      {/* home
         <pre>
            <code>{JSON.stringify(products, null, 2)}</code>
         </pre> */}

      <div className="px-20 py-5 overflow-hidden bg-yellow-500 rounded-3xl ">
        {/*//! Header */}
        <div className="flex items-center justify-between mb-5">
          <span> </span>
          <div className="text-xl font-semibold text-gray-600">
            <span
              onClick={getMenShoes}
              className={classnames("cursor-pointer", {
                "text-gray-800": active === "Men",
              })}
            >
              Men
            </span>{" "}
            |{" "}
            <span
              onClick={getWomenShoes}
              className={classnames("cursor-pointer", {
                "text-gray-800": active === "Women",
              })}
            >
              Women
            </span>
          </div>
          <div className="text-sm">
            <span>Showing 1/32 Results </span>
            <span>Filter</span>
          </div>
        </div>
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          <ProductCard
            name="Nike Fly High"
            imageUrl="/shoes/12.png"
            price="236.00"
          />
          <ProductCard
            name="Nike Fly High"
            imageUrl="https://www.searchpng.com/wp-content/uploads/2019/01/Nike-Shoe-PNG-1024x1024.png"
            price="236.00"
          />
          <ProductCard
            name="Nike Fly High"
            imageUrl="/shoes/11.png"
            price="236.00"
          />
          <ProductCard
            name="Nike Fly High"
            imageUrl="/shoes/4.png"
            price="236.00"
          />
          <ProductCard
            name="Nike Fly High 2"
            imageUrl="/shoes/5.png"
            price="127.00"
          />
          <ProductCard
            name="Nike Fly High 3 "
            imageUrl="/shoes/6.png"
            price="104.00"
          />
          <ProductCard
            name="Nike Fly High"
            imageUrl="/shoes/7.png"
            price="236.00"
          />
          <ProductCard
            name="Nike Fly High 2"
            imageUrl="/shoes/8.png"
            price="127.00"
          />
          <ProductCard
            name="Nike Fly High 3 "
            imageUrl="/shoes/9.png"
            price="104.00"
          />
          <ProductCard
            name="Nike Fly High 3 "
            imageUrl="/shoes/10.png"
            price="104.00"
          />
        </div>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  // await seedProducts()

  const res = await fetch("http://localhost:3000/api/products");
  const { products } = await res.json();

  return {
    props: {
      products,
    },
  };
};
