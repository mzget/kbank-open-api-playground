import * as functions from "firebase-functions";
import * as express from "express";
import * as cors from "cors";

import { Checkout } from "./handlers/checkout";
import { Charge } from "./handlers/charge";

const app = express();
app.use(cors({ origin: "*" }));
app.get("/checkout", (request, response) => {
  response.send("Hello from Express on Firebase!");
});
app.post("/checkout", Checkout);
app.post("/charge", Charge);

export const api = functions.https.onRequest(app);
