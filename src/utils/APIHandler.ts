import { axiosInstance } from "../API";
import { HTTPMethod } from "./HTTPMethods";
import { AxiosRequestConfig } from "axios";

const APIHandler = async (
  method: HTTPMethod,
  url: string,
  body?: any,
  config?: AxiosRequestConfig
) => {
  try {
    const response = await axiosInstance({
      method,
      url,
      ...(method !== HTTPMethod.GET && { data: body }),
      ...config,
    });
    // console.log("response in APIHandler", response.data)
    return response.data;
  } catch (error) {
    console.error("Error in API", error);
    throw error;
  }
};

export { APIHandler};
