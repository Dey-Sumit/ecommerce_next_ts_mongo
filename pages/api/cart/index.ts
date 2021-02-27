import { NextApiResponse } from "next";
import { ExtendedApiRequest } from "./../../../types/product";
import auth from "../../../middlewares/auth";
import { errorHandler } from "./../../../middlewares/handler";

errorHandler
  .use(auth)
  .get(async (req: ExtendedApiRequest, res: NextApiResponse) => {})
  .post(async (req: ExtendedApiRequest, res: NextApiResponse) => {});
