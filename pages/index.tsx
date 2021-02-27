import { seedProducts } from "../seeder";
import { HiMenu } from "react-icons/hi";
import { BiSearchAlt } from "react-icons/bi";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import classnames from "classnames";
import axios from "axios";
import { ProductCreate } from "../models/Product";
import { NextPage } from "next";
import axiosInstance from "../util/axiosInstance";

const index: NextPage<{ products: ProductCreate[] }> = ({ products }) => {
  console.log(products);

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
          {products?.map((product) => (
            <ProductCard data={product} key={product._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = async () => {
  // await seedProducts();
  let productData: any;
  // TODO handle error ; what if the request  falls
  try {
    const { data } = await axiosInstance.get("/api/products");
    // don't need to set the type here, unnecessary 😪
    const { products }: { products: ProductCreate[] } = data;
    productData = products;
  } catch (error) {
    console.log(error.message);
    productData = [];
  }
  return {
    props: {
      products: productData,
    },
  };
};
