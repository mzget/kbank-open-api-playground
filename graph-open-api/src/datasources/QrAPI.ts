import { RESTDataSource } from "apollo-datasource-rest";

export interface IQRAPI {
  requestQR: (data: any) => any;
  cancelQR: (data: any) => any;
  inquireQR: (data: any) => any;
  voidQR: (data: any) => any;
}

class QrAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://apiportal.kasikornbank.com:12002/pos/";
  }
  async requestQR(data: any) {
    const response = await this.post("qr_request", data);
    return response;
  }

  async cancelQR(data: any) {
    const response = await this.post("qr_cancel", data);
    return response;
  }
  async inquireQR(data: any) {
    const response = await this.post("inquire_payment/v2", data);
    return response;
  }
  async voidQR(data: any) {
    const response = await this.post("void_payment", data);
    return response;
  }
}

export default QrAPI;
