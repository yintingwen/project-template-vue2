import { AxiosRequestConfig } from "axios";

/**
 * 通信云请求配置类型
 */
export interface TongXinYunRequest extends AxiosRequestConfig {
  showMessage: false
}
