/// <reference types="react" />
declare type KPaymentScriptProps = {
    scriptUrl: string;
    apiKey: string;
    amount: string;
    currency: string;
    paymentMethods: "card" | "qr";
    shopName: string;
};
declare type KPaymentProps = {
    formAction: string;
    attrs: KPaymentScriptProps;
    onFinish?(result: string): void;
    onError?(message: string): void;
    onProcess?: (formData: FormData) => void;
    debug?: boolean;
};
export default function KPayment(props: KPaymentProps): JSX.Element;
export {};
