import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../Auth/UseAuth";
import routes from "../Helpers/Routes";

const Navigation = () => {
  const { logout, isLogged } = useAuth();

  const isLoggedIn = isLogged();

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand>
        <a href={routes.HomePage}>
          <img className="avatar" src="img/hellobuild-logo.png" alt="Avatar" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {isLoggedIn && (
            <>
              <Nav.Link as={NavLink} to={routes.AccountPage}>
                Account
              </Nav.Link>
              <Nav.Link as={NavLink} to={routes.RepositoriesPage}>
                Repositories
              </Nav.Link>
            </>
          )}
        </Nav>
        <Nav>
          {!isLoggedIn && (
            <>
              <Nav.Link as={NavLink} to={routes.LoginPage}>
                Login
              </Nav.Link>
              <Nav.Link as={NavLink} to={routes.RegisterPage}>
                Sign Up
              </Nav.Link>
            </>
          )}
          {isLoggedIn && (
            <Nav.Link to={routes.AccountPage} onClick={logout}>
              Logout
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
