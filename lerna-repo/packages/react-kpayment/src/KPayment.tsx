import React from "react";

type KPaymentScriptProps = {
  scriptUrl: string;
  apiKey: string;
  amount: string;
  currency: string;
  paymentMethods: "card" | "qr";
  shopName: string;
};
type KPaymentProps = {
  formAction: string;
  attrs: KPaymentScriptProps;
  onFinish?(result: string): void;
  onError?(message: string): void;
  onProcess?(): void;
  debug?: boolean;
};

export default function KPayment(props: KPaymentProps) {
  let {
    attrs,
    formAction,
    onFinish,
    onError,
    onProcess,
    debug = false
  } = props;

  async function formSubmit(event: any) {
    event.preventDefault();

    let formData = new FormData(event.target);
    let token = formData.get("token");
    let paymentMethods = formData.get("paymentMethods");
    let saveCard = formData.get("saveCard");

    let data = {
      token,
      paymentMethods,
      saveCard
    };
    let url = formAction;
    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (resp.ok) {
      const result = await resp.json();
      if (onFinish) onFinish(result);
    } else {
      const result = await resp.json();
      if (onError) onError(JSON.stringify(result));
    }

    if (onProcess) onProcess();
  }

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = attrs.scriptUrl;
    script.setAttribute("data-apikey", attrs.apiKey);
    script.setAttribute("data-amount", attrs.amount);
    script.setAttribute("data-currency", attrs.currency);
    script.setAttribute("data-payment-methods", attrs.paymentMethods);
    script.setAttribute("data-name", attrs.shopName);
    script.type = "text/javascript";
    script.async = true;
    script.onload = ev => {
      if (checkoutForm) {
        if (debug) {
          console.log("payment-container create new");
        }
        (window as any).KPayment.create();
      }
    };
    let checkoutForm = document.getElementById(`checkout-form`);
    if (checkoutForm) {
      checkoutForm.appendChild(script);
      checkoutForm.addEventListener("submit", formSubmit);
    }

    return () => {
      if (checkoutForm) {
        checkoutForm.removeChild(script);
        checkoutForm.removeEventListener("submit", formSubmit);
        let paymentContainer = document.querySelector(".payment-container");
        if (paymentContainer) {
          document.body.removeChild(paymentContainer);
        }
      }
    };
  }, []);

  return <form id={`checkout-form`}></form>;
}
