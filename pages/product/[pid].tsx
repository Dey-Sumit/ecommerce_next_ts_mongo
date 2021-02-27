import { GetStaticPropsContext, NextPage } from "next";

import { useRouter } from "next/router";
import { ProductCreate } from "../../models/Product";
import axiosInstance from "../../util/axiosInstance";

//TODO add typescript :)

const Page: NextPage<{ product: ProductCreate }> = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }

  //TODO make this an util function ;  coz it will be used in multiple component :)
  const getRealatedProducts = (product: ProductCreate) => {
    // get products of the same compnay and same colors
  };

  // handler to add product to cart
  //TODO make this an util function ;  coz it will be used in multiple component :)
  const handleAddToCart = (id: string) => {
    // send to database
  };

  return (
    <div className="">
      <h2>Product Page</h2>
      {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}

      <div className="grid grid-cols-3 gap-2 p-2 my-3 bg-yellow-400 rounded-3xl">
        <div>
          <h2 className="text-2xl">{product.name}</h2>
          <h3 className="text-lg">{product.description}</h3>
        </div>
        <div className="text-center border">
          <img src={product.imageUrl} alt="" className="mx-auto" />
        </div>
        <div>
          <p>Rating : {product.rating}(5)</p>
          <p>size</p>
          <p>color </p>
          <button
            className="p-2 text-white bg-black rounded-md"
            onClick={() => handleAddToCart(product._id)}
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* related products */}
      <h1>Related Products</h1>
      <div></div>
    </div>
  );
};

export default Page;

//! for dynamic routing , along with getStaticProps , it also needs getStaticPaths
export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const { data } = await axiosInstance(`/api/products/${params.pid}`);
  const { product } = data;
  console.log({ product });
  //TODO handle if status is 500
  //?SerializableError: Error serializing `.product` returned from `getStaticProps` in "/product/[pid]"

  return {
    props: {
      product,
    },
  };
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { data } = await axiosInstance("/api/products/");
  const { products } = data;

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => ({
    params: { pid: product._id },
  }));
  console.log(paths);

  return {
    paths,
    fallback: true,
  };
}
