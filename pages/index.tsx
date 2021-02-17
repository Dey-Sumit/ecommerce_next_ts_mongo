import { seedProducts } from '../seeder'
import { FaShoppingBag } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'
import { BiSearchAlt } from 'react-icons/bi'
import ProductCard from '../components/ProductCard'

const index = ({ products }) => {
   // console.log(products)

   return (
      <div className='bg-white'>
         {/* home
         <pre>
            <code>{JSON.stringify(products, null, 2)}</code>
         </pre> */}
         {/*//! Header */}

         <div className='px-20 py-10 bg-yellow-500 '>
            <div className='grid grid-cols-4 gap-12'>
               <ProductCard
                  name='Nike Fly High'
                  imageUrl='/shoes/s_one.png'
                  price='236.00'
               />
               <ProductCard
                  name='Nike Fly High 2'
                  imageUrl='/shoes/s_one.png'
                  price='127.00'
               />
               <ProductCard
                  name='Nike Fly High 3 '
                  imageUrl='/shoes/s_one.png'
                  price='104.00'
               />
               <ProductCard
                  name='Nike Fly High 3 '
                  imageUrl='/shoes/s_one.png'
                  price='104.00'
               />
            </div>
         </div>
      </div>
   )
}

export default index

export const getStaticProps = async () => {
   // await seedProducts()

   const res = await fetch('http://localhost:3000/api/products')
   const { products } = await res.json()

   return {
      props: {
         products,
      },
   }
}
