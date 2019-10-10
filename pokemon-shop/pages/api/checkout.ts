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

function Checkout(req: NextApiRequest, res: NextApiResponse) {
  let { method } = req;
  let body: AcceptBody = req.body;

  console.log(req.body);

  switch (method) {
    case "POST":
      setTimeout(() => {
        res.status(200).send(body);
      }, 3000);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
export default Checkout;
