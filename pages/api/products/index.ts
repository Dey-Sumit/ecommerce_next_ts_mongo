// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import Product from '../../../models/Product'
import dbConnect from '../../../util/dbConnect'

dbConnect()

export default async (req: NextApiRequest, res: NextApiResponse) => {
   switch (req.method) {
      case 'GET':
         try {
            const products = await Product.find({})
            res.status(200).json({ products })
         } catch (error) {
            console.log(error.message)
            res.status(500).json({ message: 'something went wrong' })
         }
         break
      case 'POST':
         try {
            //TODO server side validation
            const {
               name,
               mediaUrl,
               description,
               price,
            }: IRequestBody = req.body
            console.log({ name, mediaUrl, description, price })

            const product = new Product({ name, mediaUrl, description, price })
            await product.save()
            res.status(200).json({ msg: 'OK' })
         } catch (error) {
            console.log(error.message)
            res.status(500).json({ message: 'something went wrong' })
         }
         break
   }
}

interface IRequestBody {
   name: string
   price: string
   description: string
   mediaUrl: string
}
