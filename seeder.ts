import { ProductCreate } from "./models/Product";
// import mongoose from 'mongoose'
// const mongoose = require('mongoose')
// const dbConnect = require('./util/dbConnect')
// dbConnect()
import dbConnect from "./util/dbConnect";
import Product from "./models/Product";
const products: ProductCreate[] = [
  {
    name: "Fly High",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    //TODO store as double , mongo removes the .00 😑
    price: 100.0,
    imageUrl: "/Shoes/4.png",
    brand: "Nike",
    color: "redish",
  },
  {
    name: "Fly High 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 105.0,
    imageUrl: "/Shoes/5.png",

    brand: "Nike",
    color: "bluish",
  },
  {
    name: "Fly High",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 130.0,
    imageUrl: "/Shoes/6.png",

    brand: "Adidas",
    color: "reddish",
  },
  {
    name: "Fly High",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 90.0,
    imageUrl: "/Shoes/7.png",

    brand: "Nike",
    color: "reddish",
  },
  {
    name: "Fly High",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 60.0,
    imageUrl: "/Shoes/8.png",

    brand: "Bata",
    color: "greenish",
  },
  {
    name: "Fly Low",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 40.0,
    imageUrl: "/Shoes/9.png",

    brand: "bata",
    color: "blackish",
  },
  {
    name: "Fly High",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 10.0,
    imageUrl: "/Shoes/10.png",

    brand: "Nike",
    color: "whitish",
  },
  {
    name: "Fly High",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 30.0,
    imageUrl: "/Shoes/11.png",

    brand: "Nike",
    color: "bluish",
  },
  {
    name: "Fly High",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    price: 35.0,
    imageUrl: "/Shoes/12.png",

    brand: "Nike",
    color: "whitish",
  },
];

export const seedProducts = async () => {
  try {
    dbConnect();

    // delete everything first !NO DUPLICATION
    await Product.deleteMany();

    await Product.insertMany(products);
    console.log("seeded successfully");
  } catch (error) {
    console.log("Ops! not seeded", error.message);
  }
};
