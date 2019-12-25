import { createAction } from "redux-actions";
export const initialState = {
  partnerTxnUid: "",
  paymentForm: undefined,
  paymentResult: undefined
};
export function appReducer(state: any, action: { type: string; payload: any }) {
  console.log(action);
  switch (action.type) {
    case ADD_PARTNER_TRX:
      return { ...state, partnerTxnUid: action.payload };
    case ADD_PAYMENT_DATA:
      return { ...state, paymentForm: action.payload };
    case ADD_PAYMENT_RESULT:
      return { ...state, paymentResult: action.payload };
    default:
      throw new Error();
  }
}

export const ADD_PARTNER_TRX = "OPEN_API/ADD_PARTNER_TRX";
export const addPartnerTrx = createAction(ADD_PARTNER_TRX);

export const ADD_PAYMENT_DATA = "OPEN_API/ADD_PAYMENT_DATA";
export const addPaymentData = createAction(ADD_PAYMENT_DATA);

export const ADD_PAYMENT_RESULT = "OPEN_API/ADD_PAYMENT_RESULT";
export const addPaymentResult = createAction(ADD_PAYMENT_RESULT);
