export function getGooglePaymentsConfiguration() {
  return {
    environment: "TEST",
    apiVersion: 2,
    apiVersionMinor: 0,
    merchantInfo: {
      // A merchant ID is available after approval by Google.
      // 'merchantId':'01234567890123456789',
      merchantName: "Example Merchant"
    },
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["JCB", "MASTERCARD", "VISA"]
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          // Check with your payment gateway on the parameters to pass.
          // @see {@link https://developers.google.com/pay/api/web/reference/request-objects#gateway}
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId"
          }
        }
      }
    ]
  };
}
