import { Redirect, Route } from "react-router-dom";

const PrivateRoute = (props) => {
    
    const user = {id: 1, role: 'regular'};

    if(!user) return <Redirect to='/login' />

    return (
        <Route {...props}/>
    )
};

export default PrivateRoute;