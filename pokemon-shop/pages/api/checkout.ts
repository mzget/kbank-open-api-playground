import { NextApiRequest, NextApiResponse } from "next";

type AcceptBody = {
  apikey: string;
  amount: string;
  currency: string;
  source_type: string;
  mode: string;
  token: string;
  reference_order: string;
} & {
  paymentMethods: string;
  saveCard: true;
  token: string;
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  let { method } = req;
  let body: AcceptBody = req.body;

  console.log(req.body);

  switch (method) {
    case "GET":
      res.status(200).json({});
      break;
    case "POST":
      res.status(200).json(body);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
