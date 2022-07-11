import { useLocation } from "react-router-dom";
import useAuth from "../Auth/UseAuth";

const userCredentials = {};

const LoginPage = () => {
    const location = useLocation();
    const { login } = useAuth(); 
   
    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={() => login(userCredentials, location.state?.from)}>login</button>
        </div>
    )
};

export default LoginPage;