import { NextApiRequest } from 'next'
import { Document } from 'mongoose'
export interface IProduct extends Document {
   name: string
   price: Number
   description: string
   mediaUrl: string
}

export interface ExtendedApiRequest extends NextApiRequest {
   user: {}
}
