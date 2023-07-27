import axios from "axios";
import { AUTH_API_URL } from "./constants";

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

  axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
  return access_token;
};

// axios.interceptors.request.use(
//   (response) => response,
//   async (error) => {
//     const { config } = error;

//     if (!config || !config.retry) {
//       return Promise.reject(error);
//     }

//     await getAccessCode();
//     config.retry -= 1;

//     const delayRetryRequest = new Promise<void>((resolve) => {
//       setTimeout(() => {
//         console.log("retry the request", config.url);
//         resolve();
//       }, config.retryDelay || 1000);
//     });
//     return delayRetryRequest.then(() => axios(config));
//   },
// );
