import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxios = () => {
  const { loginUserInfo } = useAuth();
  instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${loginUserInfo.accessToken}`;
    return config;
  });
  return instance;
};

export default useAxios;
