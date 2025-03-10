import { useContext } from "react";
import { AuthContext } from "../firebase/Provider/AuthProvider";

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth 
};

export default useAuth;