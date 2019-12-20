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
}

export default QrAPI;
