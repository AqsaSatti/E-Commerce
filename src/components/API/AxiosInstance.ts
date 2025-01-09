import axios from "axios";
import { getTokenState, updateTokenState } from "./AuthHelper";
import { APIHandler } from "../../utils/APIHandler";
import { HTTPMethod } from "../../utils/HTTPMethods";

// Create Axios instance with interceptors
export const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => { 
    const { accessToken } = getTokenState();
    console.log("accessToken in request interceptor", accessToken)
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response in Response Interceptor:", response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config ;
    // const state = getTokenState();
    // console.log("state in response interceptor", state)
    const {refreshToken} = getTokenState()

    if (error.response?.status === 401 && !originalRequest._retry && refreshToken) {  
      originalRequest._retry = true;
      try {
        const refreshResponse = await APIHandler(HTTPMethod.POST, "auth/refresh",
          { refreshToken, expiresInMins:1} 
        );
        console.log("refresh response.....", refreshResponse)
        const newAccessToken = refreshResponse.refreshToken ; 
        console.log("newAccessToken in response interceptor", refreshResponse.refreshToken )
        updateTokenState({accessToken:newAccessToken, refreshToken:newAccessToken});
       // console.log('updated token',updateTokenState);
        
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest); // Retry original request   
        
      } catch (refreshError) {
        console.error("Refresh token expired or invalid, please log in again.");
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);
