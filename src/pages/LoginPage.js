import { useEffect, useState } from "react";
import { FilePersonFill } from "react-bootstrap-icons";
import { useHistory } from "react-router-dom";

import useAuth from "../Auth/UseAuth";
import { layout } from "../components/Layouts/layoutTemplate";
import routes from "../Helpers/Routes";
import Alert from "../components/Alert";

const initialAlert = { type: null, message: null };

const initialUser = {
  user: "",
  password: "",
};

const LoginPage = () => {
  const [alert, setAlert] = useState(initialAlert);
  const [user, setUser] = useState(initialUser);

  const { login } = useAuth();

  const history = useHistory();

  const onInputChange = (e) => {
    setAlert(initialAlert);

    const { name, value } = e.target || {};

    const valueFormated = name === "user" ? value.toLowerCase() : value;

    setUser({
      ...user,
      [name]: valueFormated,
    });
  };

  const loginHandler = () => {
    const usersList = JSON.parse(localStorage.getItem("users"));

    let validated = false;

    usersList.forEach((userOfList) => {
      if (userOfList.user === user.user) {
        if (userOfList.password === user.password) {
          validated = true;
          login({ userName: user.user });
          history.push(routes.AccountPage);
        }
      }
    });

    if (!validated) {
      setAlert({ type: "danger", message: "Username or password is invalid" });
    }
  };

  useEffect(() => {
    alert.type !== null && setTimeout(() => setAlert(initialAlert), 2500);
  }, [alert.type]);

  return (
    <div className={layout.mainClass}>
      <div className={layout.mainRow}>
        <div className={layout.mainCol}>
          <div className={layout.cardTitleMain}>
            <div className={layout.cardTitleBody}>
              <h4 className={layout.cardTitleText}>
                <FilePersonFill color="#172c45" size="30" /> Login{" "}
              </h4>
            </div>
          </div>
          <div className={layout.cardContentMain}>
            <div className={layout.cardContentBody}>
              <Alert type={alert.type} message={alert.message} />
              <form>
                <div className="mb-4">
                  <img
                    className=""
                    src="img/hellobuild-logo.png"
                    alt="Avatar"
                  />
                  <br />
                </div>
                <div className="form">
                  <label className="mb-2" htmlFor="uname">
                    <b>Username</b>
                  </label>
                  <br />
                  <input
                    className="mb-2 rounded ps-2"
                    type="text"
                    placeholder="Enter Username"
                    name="user"
                    value={user.user}
                    onChange={onInputChange}
                    required
                  />
                  <br />
                  <label className="mb-2" htmlFor="psw">
                    <b>Password</b>
                  </label>
                  <br />
                  <input
                    className="mb-2 rounded ps-2"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={user.password}
                    onChange={onInputChange}
                    required
                  />
                  <br />

                  <p className={layout.cardContentPT}>
                    Don't have an account?{" "}
                    <a href={routes.RegisterPage}>Sign up!</a>
                  </p>
                </div>
              </form>
              <button
                className={layout.cardContentButton}
                onClick={loginHandler}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
