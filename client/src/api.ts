import axios from "axios";

const service = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000/api",
  withCredentials: true,
});

export default {
  service: service,

  async submitUserInfo(data: any) {
    return await service.post(`/signup`, data);
  },
};
