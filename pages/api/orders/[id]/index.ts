import { NextApiResponse } from "next";
import auth from "../../../../middlewares/auth";
import { ExtendedApiRequest } from "../../../../types/product";
import { errorHandler } from "./../../../../middlewares/handler";

const handler = errorHandler
  .use(auth)
  .get(async (req: ExtendedApiRequest, res: NextApiResponse) => {
    const {
      query: { id },
    } = req;
    const order = await Order.findById(id).populate("user", "name email");
    if (order) {
      res.json(order);
    } else {
      res.status(404);
      throw new Error("Order not found");
    }
  })
  .post(async (req: ExtendedApiRequest, res: NextApiResponse) => {
    //TODO
  });

export default handler;
