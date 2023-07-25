import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { setCookie, getCookie } from "cookies-next";
import { AUTH_API_URL, SPOTIFY_API_URL } from "./constants";

const axiosAuthInstance = axios.create({
  baseURL: AUTH_API_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

const axiosInstance = axios.create({
  baseURL: SPOTIFY_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("access_token")}`,
  },
});

export const getAccessCode = async () => {
  const response = await axios.post(AUTH_API_URL, null, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${process.env.SPOTIFY_SECRET}`,
    },
  });

  if (response.status !== 200) {
    throw new Error("Failed to fetch access token");
  }
  const access_token = response.data.access_token;

  setCookie("access_token", access_token);
  return access_token;
};

createAuthRefreshInterceptor(axiosInstance, async (failedRequest) => {
  const access_token = await getAccessCode();
  const bearer = `Bearer ${access_token}`;

  failedRequest.response.config.headers["Authorization"] = bearer;
});

export default axiosInstance;
