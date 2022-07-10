import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layouts/Layouts';
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
                    <PublicRoute exact path='/' component={HomePage} />
                    <PublicRoute exact path='/login' component={LoginPage} />
                    <PublicRoute exact path='/register' component={RegisterPage} />
                    <PrivateRoute exact path='/account' component={AccountPage} />
                    <PrivateRoute exact path='/repositories' component={RepositoriesPage} />

                    <Route exact path='*' component={NotFoundPage} />
                </Switch>
                
                <h1>Mientras</h1>
            </Layout>
        </Router>
    )
};

export default AppRouter;