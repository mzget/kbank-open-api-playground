import * as express from "express";
import { fetch } from "cross-fetch";

type AcceptBody = {
  amount: string;
  currency: string;
} & {
  paymentMethods: string;
  saveCard: true;
  token: string;
};
const apikey = "pkey_prod_5BpmBr5LpqG84jYnDLPQe3Zv1OuhdN5dg";
let chargeEndpoint =
  "https://us-central1-kbank-open-api.cloudfunctions.net/api/charge";
export async function Checkout(req: express.Request, res: express.Response) {
  let body: AcceptBody = req.body;
  try {
    let data = {
      token: body.token,
      saveCard: body.saveCard,
      source_type: body.paymentMethods,
      amount: body.amount,
      currency: body.currency,
      mode: "token",
      reference_order: "test123"
    };
    const resp = await fetch(chargeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "x-api-key": apikey
      },
      body: JSON.stringify(data)
    });
    if (resp.ok) {
      const result = await resp.json();
      res.status(200).json(result);
    } else {
      const result = await resp.json();
      throw new Error(JSON.stringify(result));
    }
  } catch (ex) {
    res.status(400).json({ status: "Bad Request", message: ex.message });
  }
}
