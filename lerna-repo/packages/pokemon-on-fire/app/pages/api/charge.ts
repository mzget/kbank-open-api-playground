import { NextApiRequest, NextApiResponse } from 'next'

type AcceptBody = {
    amount: string;
    currency: string;
    description: string;
    source_type: string;
    mode: string;
    token: string;
    reference_order: string;
  }
async function Charge (req: NextApiRequest, res: NextApiResponse)  {
    let { method } = req;
    let body : AcceptBody = req.body;
    console.log("headers", req.rawHeaders)
    let apiKey = req.rawHeaders["x-api-key"]

  switch (method) {
    case "POST":
      try {
        let resp = {
            "id": "chrg_prod_47b66904ca59846c6be83cf444870a2f2",
            "object": "charge",
            "amount": body.amount,
            "currency": body.currency,
            "transaction_state": "Auhtorized",
            "source": {
              "id": "card_test_42f00571ac396ad600ce8e72b0e58def1",
              "object": "card",
              "brand": "MASTERCARD",
              "last4": "514950******9007",
              "issuer_bank": "Kasikornbank Public Limited"
            },
            "created": "20180322121944000",
            "status": "success",
            "approval_code": "764253",
            "livemode": "false",
            "metadata": {},
            "failure_code": "",
            "failure_message": "",
            "redirect_url": "",
            "settlement_info": "",
            "refund_info": ""
          }
          res.status(200).json(resp)
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