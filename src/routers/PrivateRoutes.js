import { Redirect, Route, useLocation } from "react-router-dom";
import useAuth from "../Auth/UseAuth";
import routes from "../Helpers/Routes";

const PrivateRoute = ({...props}) => {
    const location = useLocation()

    const { isLogged } = useAuth();

    if(!isLogged()) return <Redirect to={{pathname: routes.LoginPage, state: {from: location}}} />;

    return <Route {...props}/>;
};

export default PrivateRoute;