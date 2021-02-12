import { verify } from 'jsonwebtoken'
import { NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'
import User from '../models/User'
import { ExtendedApiRequest } from './../types/product'
const auth = async (
   req: ExtendedApiRequest,
   res: NextApiResponse,
   next: NextHandler
) => {
   console.log('auth middleware')
   try {
      // verify token & set the user in request
      const decoded: any = verify(req.cookies.token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select('-password')
      next()
   } catch (error) {
      console.log(error)
      res.status(301)
      throw new Error('User is not authorized')
   }
}
export default auth
