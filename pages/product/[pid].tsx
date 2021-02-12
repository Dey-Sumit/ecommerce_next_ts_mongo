import {
   GetServerSidePropsContext,
   GetStaticPropsContext,
   NextPage,
} from 'next'

import { useRouter } from 'next/router'

//TODO add typescript :)

const Page: NextPage<{ product: any }> = ({ product }) => {
   const router = useRouter()
   if (router.isFallback) {
      return <h3>Loading...</h3>
   }
   return (
      <div className='border-2 border-green-500'>
         <h2>Product Page</h2>
         <pre>{JSON.stringify(product, null, 2)}</pre>
      </div>
   )
}

export default Page

//! for dynamic routing , along with getStaticProps , it also needs getStaticPaths
export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
   const res = await fetch(`http://localhost:3000/api/products/${params.pid}`)
   const { product } = await res.json()
   console.log({ product })
   //TODO handle if status is 500
   //?SerializableError: Error serializing `.product` returned from `getStaticProps` in "/product/[pid]"

   return {
      props: {
         product,
      },
   }
}

export async function getStaticPaths() {
   // Call an external API endpoint to get posts
   const res = await fetch('http://localhost:3000/api/products/')
   const { products } = await res.json()

   // Get the paths we want to pre-render based on posts
   const paths = products.map(product => ({
      params: { pid: product._id },
   }))
   console.log(paths)

   return {
      paths,
      fallback: true,
   }
}
