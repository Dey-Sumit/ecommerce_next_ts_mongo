import morgan from "morgan";
import { errorHandler } from "./../../middlewares/handler";
import { ExtendedApiRequest } from "./../../types/product";
import { NextApiResponse } from "next";
import auth from "../../middlewares/auth";

export default errorHandler
  .use(morgan("dev"))
  .use(auth)
  .get(async (req: ExtendedApiRequest, res: NextApiResponse) => {
    console.log("got it");
    console.log(req.user);

    res.status(200).json({
      profile: {},
    });
  })
  .post(async (req: ExtendedApiRequest, res: NextApiResponse) => {});
