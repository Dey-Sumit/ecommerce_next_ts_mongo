import { errorHandler } from './../../../../middlewares/handler'
import { NextApiResponse } from 'next'
import auth from '../../../../middlewares/auth'
import { ExtendedApiRequest } from '../../../../types/product'
import Order from '../../../../models/Orders'

const handler = errorHandler
   .use(auth)
   .get(async (req: ExtendedApiRequest, res: NextApiResponse) => {
      //   console.log(req.user._id)
      const orders = await Order.find({ user: req.user._id })
      res.status(200).json(orders)

      //    res.end(`accessed ${id}!!!`)
   })

export default handler
