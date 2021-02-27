import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

export const errorHandler = nc({
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(404).send({
      ok: false,
      message: `API route not found: ${req.url}`,
    });
  },

  onError: (err, _req: NextApiRequest, res: NextApiResponse) => {
    console.log("ERROR", err);
    // check status code

    res.status(500).send({
      ok: false,
      message: `Unexpected error.`,
      error: err.toString(),
    });
  },
});
