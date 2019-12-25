import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";

import KPayment from "react-kpayment";
import { useStore } from "../../store/storeContext";
import SimpleModal from "../../components/SimpleModal";
export function PaymentGateway() {
  const [state] = useStore();
  let { pokemon } = state;
  const [open, setOpen] = React.useState(false);

  const onProcessHandler = React.useCallback((formData: FormData) => {
    let data = {};
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }
    console.log("processing", data);
    // setForm(data);
    // setCheckoutState(CheckoutState.processing);
    setOpen(true);
  }, []);

  const onFinishHandler = React.useCallback((result: any) => {
    console.log("finished", result);
    // setResult(result);
    // setCheckoutState(CheckoutState.finished);
    setOpen(false);
  }, []);

  return (
    <div>
      <p>Credit/Debit Card</p>
      <SimpleModal open={open} handleClose={() => {}} message={"Processing"} />
      <KPayment
        formAction="https://us-central1-kbank-open-api.cloudfunctions.net/api/checkout"
        onProcess={onProcessHandler}
        onFinish={onFinishHandler}
        onError={() => {}}
        debug={true}
        attrs={{
          scriptUrl:
            "https://uat-kpaymentgateway.new-kpgw.com/ui/v2/kpayment.min.js",
          apiKey: "pkey_prod_5BpmBr5LpqG84jYnDLPQe3Zv1OuhdN5dg",
          amount: pokemon.price,
          currency: "THB",
          paymentMethods: "card",
          shopName: "The Pokemon Shop"
        }}
      />
    </div>
  );
}
