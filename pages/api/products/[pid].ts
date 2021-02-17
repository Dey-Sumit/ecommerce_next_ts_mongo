import { NextApiResponse, NextApiRequest } from 'next'
import Product from '../../../models/Product'
//TODO create a vs code snippet :)

export default async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      const { pid } = req.query
      const product = await Product.findOne({ _id: pid })
      res.status(200).json({ product })
   } catch (error) {
      console.error(error.message)
      res.status(404).json({ message: 'Product Not Found' })
   }
}

// const getProductHandler = async (pid:string) => {
//     return await Product.findOne({ _id: pid })
//  }
