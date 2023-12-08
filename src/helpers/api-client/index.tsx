import axios from "axios";
import router from "next/router";

const API_TIMEOUT = 20000;

const DEFAULT_ERROR_MESSAGE = {
  name: "client_side_error",
  message: "Mohon maaf terjadi kesalahan, silahkan coba beberapa saat lagi.",
};

const apiClient = axios.create({
  baseURL: `https://api.jikan.moe`,
  headers: {
    Accept: "application/json",
  },
  timeout: API_TIMEOUT,
});

apiClient.interceptors.response.use(
  (response) => response,
  async function (error) {
    if (error?.response) {
      console.log("ERROR : ", error?.response);
    }
  }
);

export default apiClient;
