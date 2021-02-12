import { NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import nc from 'next-connect'
import * as yup from 'yup'

import dbConnect from '../../../util/dbConnect'
import User from '../../../models/User'
import generateToken from '../../../util/generateToken'

dbConnect()

let schema = yup.object().shape({
   email: yup.string().email(),
   password: yup.string().required(),
})

const loginHandler = nc().post(
   async (req: NextApiRequest, res: NextApiResponse) => {
      console.log('got it')

      const { email, password } = req.body
      console.log({ email, password })

      // 1.check validation
      try {
         await schema.validate({ email, password }, { abortEarly: false })
      } catch (error) {
         //TODO format error
         res.status(400).json({ errors: error.errors })
         return
      }
      // 2. check if the user exist
      const user = await User.findOne({ email })
      console.log('-------------')

      console.log(user)

      // 3. if exist, then match the password
      if (user && (await user.matchPassword(password))) {
         const { _id, name, email } = user

         // 4. generate token using the id
         const token = generateToken(_id)
         console.log(token)

         //5. set the cookies
         res.setHeader(
            'Set-Cookie',
            cookie.serialize('token', token, {
               httpOnly: true,
               secure: process.env.NODE_ENV === 'production',
               sameSite: 'strict',
               maxAge: 3600,
               path: '/',
            })
         )
         // 6. send the user info as res :)
         res.status(200).json({
            _id,
            name,
            email,
            // this token unnecessary
            token,
         })
      } else {
         res.status(401)
         throw new Error('Invalid email or password')
      }
   }
)
export default loginHandler
