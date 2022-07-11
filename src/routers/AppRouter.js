import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layouts/Layouts';
import routes from '../Helpers/Routes';
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import RepositoriesPage from '../pages/RepositoriesPage';
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoutes';

export const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <PublicRoute exact path={routes.HomePage} component={HomePage} />
                    <PublicRoute exact path={routes.LoginPage} component={LoginPage} />
                    <PublicRoute exact path={routes.RegisterPage} component={RegisterPage} />
                    <PrivateRoute exact path={routes.AccountPage} component={AccountPage} />
                    <PrivateRoute exact path={routes.RepositoriesPage} component={RepositoriesPage} />

                    <Route exact path='*' component={NotFoundPage} />
                </Switch>
                
                <h1>Mientras</h1>
            </Layout>
        </Router>
    )
};

export default AppRouter;