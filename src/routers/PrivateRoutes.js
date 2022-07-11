import { Redirect, Route } from "react-router-dom";
import useAuth from "../Auth/UseAuth";
import routes from "../Helpers/Routes";

const PrivateRoute = ({...props}) => {
    const { isLogged } = useAuth();

    if(!isLogged()) return <Redirect to={routes.LoginPage} />

    return <Route {...props}/>;
};

export default PrivateRoute;