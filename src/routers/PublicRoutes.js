import { Redirect, Route } from "react-router-dom";
import useAuth from "../Auth/UseAuth";
import routes from "../Helpers/Routes";

const PublicRoute = (props) => {
    const { isLogged } = useAuth();

    if(isLogged()) return <Redirect to={routes.RepositoriesPage}/>

    return (
        <Route {...props}/>
    )
};

export default PublicRoute;