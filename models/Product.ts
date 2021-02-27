import { IProduct } from "./../types/product";
import mongoose, { Document } from "mongoose";
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  //TODO add size
  //   size: {
  //     type: Number[],
  //     required: true,
  //     enum: [8, 9, 10, 11],
  //   },
  //TODO  set range of red, so that i can get all the reddish values
  color: {
    type: String,
    required: true,
    //TODO FIX this
    // enum: ["reddish", "bluish", "whitish", "blackish"],
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numOfRatings: {
    type: Number,
    default: 0,
  },
  brand: {
    type: String,
    required: true,
  },
});

export default (mongoose.models.product as mongoose.Model<ProductDoc>) ||
  mongoose.model<ProductDoc>("product", productSchema);

//

//TODO add seller,add review field , future update 😂

/* //? brand,title,description,price,rating,size,color,image(s)
   




   */

interface ProductDoc extends Document {
  brand: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  noOfRatings: number;
  color: string;
}

export interface ProductCreate {
  _id?: string; //TODO : add id type from mongoose, read some articles mongoose with type sctipe ; change interface name , refactor the folder strcuture
  brand: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating?: number;
  noOfRatings?: number;
  color: "reddish" | "bluish" | "whitish" | "blackish" | "greenish";
}
// dummy data
