import { seedProducts } from '../seeder'
const index = ({ products }) => {
   console.log(products)

   return (
      <div className='border-2 border-yellow-400'>
         home
         <pre>
            <code>{JSON.stringify(products, null, 2)}</code>
         </pre>
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
