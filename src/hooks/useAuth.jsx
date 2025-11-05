import { useContext } from "react";
import { UserAuthProviderContext } from "../components/Context/AuthProviderContext";

const useAuth = () => {
  const user = useContext(UserAuthProviderContext);
  return user;
};

export default useAuth;
