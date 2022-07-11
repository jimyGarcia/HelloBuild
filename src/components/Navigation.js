import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useAuth from '../Auth/UseAuth';
import routes from '../Helpers/Routes';

const Navigation = () => {

    const {logout} = useAuth();

    return (
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
            <Navbar.Brand>
                poner imagen
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link as={NavLink} to={routes.HomePage}>Home</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.RepositoriesPage}>Repositories</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.LoginPage}>Login</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.RegisterPage}>Register</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.AccountPage}>Account</Nav.Link>
                    <Nav.Link to={routes.AccountPage} onClick={logout}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;