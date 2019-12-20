import { RESTDataSource } from "apollo-datasource-rest";

class QrAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://APIPORTALTEST.kasikornbank.com:12002/pos/";
  }
  async requestQR(data: any) {
    const response = await this.post("qr_request", data);
    return response;
  }

  async cancelQR(data: any) {
    const response = await this.post("qr_cancel", data);
    return response;
  }
  async inquiryQR(data: any) {
    const response = await this.post("inquire_payment/v2", data);
    return response;
  }
  async voidQR(data: any) {
    const response = await this.post("void_payment", data);
    return response;
  }
}

export default QrAPI;
