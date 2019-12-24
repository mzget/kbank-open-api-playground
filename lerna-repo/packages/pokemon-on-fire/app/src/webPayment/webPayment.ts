import { getGooglePaymentsConfiguration } from "./googlePay";

export function WebPayment(params: any) {
  // Supported payment methods
  const paymentMethods = [
    {
      supportedMethods: "https://google.com/pay",
      data: getGooglePaymentsConfiguration()
    },
    {
      supportedMethods: "basic-card",
      data: {
        supportedNetworks: ["visa", "mastercard", "jcb"],
        supportedTypes: ["credit", "debit"]
      }
    }
  ];
  const paymentDetails = {
    displayItems: [
      {
        label: params.name,
        amount: { currency: "THB", value: "1" }
      }
    ],
    total: {
      label: "Total due",
      amount: { currency: "THB", value: "1" }
    }
  };
  const paymentOptions = {
    // requestShipping: true,
    requestPayerEmail: true,
    requestPayerPhone: true,
    requestPayerName: true
    // shippingType: "delivery"
  };

  return new PaymentRequest(paymentMethods, paymentDetails, paymentOptions);
}
