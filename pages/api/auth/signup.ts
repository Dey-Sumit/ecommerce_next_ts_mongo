import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import cookie from "cookie";
import morgan from "morgan";

import dbConnect from "../../../util/dbConnect";
import User from "../../../models/User";
import generateToken from "../../../util/generateToken";
import { signUpSchema } from "../../../yupSchema";

dbConnect(); // db connect execute this first

const signUpHandler = nc()
  .use(morgan("dev"))
  .post(async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, password } = req.body;
    console.log("got request--------");
    console.log(req.body);

    // 1. form validation
    try {
      await signUpSchema.validate(
        { name, email, password },
        { abortEarly: false }
      );
    } catch (error) {
      //TODO format error
      // console.log({ error: error.errors })
      res.status(400).json({ errors: error.errors });
      return;
    }

    //2. check if the email exist
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "Email already exists" });
      return;
      //throw new Error('User already exists !')
    }
    //?FIX this

    //3. create the user
    const user = await User.create({ name, email, password });
    if (user) {
      const { _id, name, email } = user;

      // 4. generate token using the id
      const token = generateToken(_id);

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 3600,
          path: "/",
        })
      );
      //5. return the data
      res.status(200).json({
        _id,
        name,
        email,
      });
    } else {
      res.status(500).json({ message: "User not created" });
      return;
      // throw new Error('')
    }
  });
export default signUpHandler;
