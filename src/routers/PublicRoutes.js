import { Redirect, Route } from "react-router-dom";
import useAuth from "../Auth/UseAuth";

const PublicRoute = (props) => {
    const { user } = useAuth();

    if(user) return <Redirect to='/repositories' />

    return (
        <Route {...props}/>
    )
};

export default PublicRoute;