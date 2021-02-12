import { NextHandler } from 'next-connect'
import { NextApiResponse } from 'next'
import { ExtendedApiRequest } from '../types/product'

export const admin = (
   req: ExtendedApiRequest,
   res: NextApiResponse,
   next: NextHandler
) => {
   if (req.user && req.user.role === 'root') {
      next()
   } else {
      res.status(401)
      throw new Error('Not authorized as an admin')
   }
}
