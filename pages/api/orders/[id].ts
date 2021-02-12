import { errorHandler } from './../../../middlewares/handler'
import { verify } from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import nc, { NextHandler } from 'next-connect'
import User from '../../../models/User'
import auth from '../../../middlewares/auth'
import { ExtendedApiRequest } from '../../../types/product'

const handler = errorHandler
   //    .use((req, res, next) => {
   //       //   throw new Error('oh no!')
   //       // or use next
   //       next(Error('oh no!'))
   //    })
   .use(auth)
   .get(async (req: ExtendedApiRequest, res: NextApiResponse) => {
      const {
         query: { id },
      } = req
      console.log(req.user)

      res.end(`accessed ${id}!!!`)
   })

export default handler
