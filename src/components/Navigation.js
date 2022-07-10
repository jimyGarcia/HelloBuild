import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
            <Navbar.Brand>
                poner imagen
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='me-auto'>
                    <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/repositories'>Repositories</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
                    <Nav.Link as={NavLink} to='/register'>Register</Nav.Link>
                    <Nav.Link as={NavLink} to='/account'>Account</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Navigation;