import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },

});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("authToken");
//   if (token && !config.url.startsWith("/manager/properties")) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });


