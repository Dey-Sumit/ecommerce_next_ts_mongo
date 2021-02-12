// import mongoose from 'mongoose'
// const mongoose = require('mongoose')
// const dbConnect = require('./util/dbConnect')
// dbConnect()
import dbConnect from './util/dbConnect'
import Product from './models/Product'
const products = [
   {
      name: 'Samsung Phone',
      description: 'This is a samsung phone :(',
      price: 100,
      mediaUrl:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-n3KGBglF7FVeCMkm-KICnQQJAy8UiXCUg&usqp=CAU',
   },
   {
      name: 'Apple Phone',
      description: 'This is a apple phone :(',
      price: 150,
      mediaUrl:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-n3KGBglF7FVeCMkm-KICnQQJAy8UiXCUg&usqp=CAU',
   },
   {
      name: 'NOkia Phone',
      description: 'This is a nokia phone :(',
      price: 60,
      mediaUrl:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-n3KGBglF7FVeCMkm-KICnQQJAy8UiXCUg&usqp=CAU',
   },
]
export const seedProducts = async () => {
   try {
      dbConnect()
      // delete everything first !NO DUPLICATION
      await Product.deleteMany()
      const data = await Product.insertMany(products)
      console.log('seeded successfully')
   } catch (error) {
      console.log('Ops! not seeded', error.message)
   }
}
