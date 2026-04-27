import axios, { type InternalAxiosRequestConfig } from "axios";
import { baseUrl } from "./constants";
import type { RootState } from "./app/store";
import type { Store } from "@reduxjs/toolkit";


const axiosApi = axios.create({
  baseURL: baseUrl,
});


export const addInterceptors = (store: Store<RootState>) => {
  axiosApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = store.getState().users.user?.token;

   if (token) {
     config.headers = config.headers || {};
     config.headers.Authorization = `Bearer ${token}`;
   }

    return config;
  });
};


axiosApi.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== "/api/token/pair"
    ) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh");

      const response = await axios.post("/api/token/refresh", {
        refresh,
      });

      const newAccess = response.data.access;

      try {
        const { store } = await import("./app/store.ts");
        const { updateAccessToken } =
          await import("./components/user/store/userSlice.ts");

        store.dispatch(updateAccessToken(newAccess));
      } catch (e) {
        console.log("Redux store not found.", e);
      }

      originalRequest.headers.Authorization = `Bearer ${newAccess}`;
      return axiosApi(originalRequest);
    }

    return Promise.reject(error);
  },
);

export default axiosApi;