import { RequestConfig } from 'umi';
import 'font-awesome/css/font-awesome.css'

export const request: RequestConfig = {
  timeout: 1000,
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [],
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: resData.ok,
        errorMessage: resData.message,
      };
    },
  },
};
