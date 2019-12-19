import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { STRIPE_SK_KEY } from "../../src/const";

type AcceptBody = {
  amount: string;
  currency: string;
  description: string;
  source_type: string;
  mode: string;
  token: string;
  reference_order: string;
};
async function Charge(req: NextApiRequest, res: NextApiResponse) {
  let { method } = req;
  let body: AcceptBody = req.body;

  const stripe = new Stripe(STRIPE_SK_KEY);

  switch (method) {
    case "POST":
      try {
        const charge = await stripe.charges.create({
          amount: Number(body.amount),
          currency: body.currency,
          source: body.token,
          receipt_email: "nattapon.rat@kbtg.tech",
          description: "Example charge"
        });
        res.status(200).json(charge);
      } catch (ex) {
        res.status(400).json({ status: "Bad Request", message: ex.message });
      }
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default Charge;
