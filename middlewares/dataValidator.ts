import { verify } from 'jsonwebtoken'
import { NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'
import User from '../models/User'
import { ExtendedApiRequest } from './../types/product'
const auth = async (
   req: ExtendedApiRequest,
   _: NextApiResponse,
   next: NextHandler
) => {
   console.log('data validator middleware')

   next()
}
export default auth
