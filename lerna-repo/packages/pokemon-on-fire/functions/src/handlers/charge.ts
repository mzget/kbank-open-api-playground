import * as express from "express";
import fetch from "cross-fetch";

type AcceptBody = {
  amount: string;
  currency: string;
  description: string;
  source_type: string;
  mode: string;
  token: string;
  reference_order: string;
};
export async function Charge(req: express.Request, res: express.Response) {
  let body: AcceptBody = req.body;

  try {
    const chargeUrl =
      "https://apiportal.kasikornbank.com:12002/kpgw/card/v1/charge";
    const opts: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Partner-Id": "{Partner-Id}",
        "Partner-Secret": "{Partner-Secret}",
        "x-api-key": "{SECRET_KEY}"
      },
      credentials: "omit",
      body: JSON.stringify({
        amount: body.amount,
        currency: body.currency,
        description: body.description,
        source_type: body.source_type,
        mode: body.mode,
        token: body.token,
        reference_order: body.reference_order
      })
    };

    /**
     * Note, For production two-way SSL authentication is require for call Open-API.
     */
    const resp = await fetch(chargeUrl, opts);
    const data = await resp.json();
    res.status(200).json(data);
  } catch (ex) {
    res.status(400).json({ status: "Bad Request", message: ex.message });
  }
}
