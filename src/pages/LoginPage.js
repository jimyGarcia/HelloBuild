import useAuth from "../Auth/UseAuth";

const userCredentials = {};

const LoginPage = () => {
    const { login } = useAuth(); 
   
    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={() => login(userCredentials)}>login</button>
        </div>
    )
};

export default LoginPage;