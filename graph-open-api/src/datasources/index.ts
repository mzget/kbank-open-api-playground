import { IQRAPI } from "./QrAPI";
export { default as QrAPI } from "./QrAPI";

export interface IDataSource {
  qrAPI: IQRAPI;
}
