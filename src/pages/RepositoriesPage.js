import { useEffect, useState } from "react";
import { Star, StarFill, Github } from "react-bootstrap-icons";
import OAuth2Login from "react-simple-oauth2-login/dist/OAuth2Login";

import { layout } from "../components/Layouts/layoutTemplate";
import { reposGit } from "../Helpers/repos";
import Alert from "../components/Alert";
import { useHistory } from "react-router-dom";

const RepositoriesPage = () => {
  const [content, setContent] = useState(false);
  const [repos, setRepos] = useState(reposGit);
  const [favoriteChange, setFavoriteChange] = useState(false);
  const [toastMsg, setToastMsg] = useState({
    name: null,
    complement: null,
  });

  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const history = useHistory();

  const authorizationUrl = process.env.REACT_APP_AUTH_URL;
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  const appServerUrl = process.env.REACT_APP_APP_SERVER_URL;
  const oauthServerUrl = process.env.REACT_APP_OAUTH_SERVER_URL;
  const scope = process.env.REACT_APP_SCOPE;

  const showToast = () => {
    var x = document.getElementById("snackbar");

    x.className = "show";

    setTimeout(() => {
      x.className = x.className.replace("show", "");
    }, 3000);
  };

  const favoriteHandler = (index) => {
    Object(repos)[index].favorite
      ? (Object(repos)[index].favorite = false)
      : (Object(repos)[index].favorite = true);
    setFavoriteChange(favoriteChange ? false : true);
    let name = Object(repos)[index].name;
    let complement = Object(repos)[index].favorite
      ? " has been successfully selected as a favorite."
      : " has been successfully removed from favorites.";
    setToastMsg({
      name: name,
      complement: complement,
    });
    showToast();
  };

  const lsCode = localStorage.getItem("code");

  useEffect(() => {
    console.log("this is the code: ", lsCode);
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
    };
    if (lsCode) {
      fetch(
        `${appServerUrl}?client_id=${clientId}&client_secret=${clientSecret}&code=${lsCode}`,
        requestOptions
      )
        .then((response) => console.log("Respuesta: ", response))
        .then((data) => console.log("Obteniendo la data", data));
    }
  }, [lsCode]);

  return (
    <div className={layout.mainClass}>
      <div className={layout.mainRow}>
        <div className={layout.mainCol}>
          <div className={layout.cardTitleMain}>
            <div className={layout.cardTitleBody}>
              <h4 className={layout.cardTitleText}>
                <Github color="#172c45" size="30" /> My Repositories{" "}
              </h4>
            </div>
          </div>
          <div className={layout.cardContentMain}>
            <div className={layout.cardContentBody}>
              {error && <Alert type={"danger"} message={error} />}
              <div className="mb-4">
                <img className="logo-rep" src="img/github.png" alt="Avatar" />
                <br />
              </div>
              <OAuth2Login
                // id="auth-code-login-btn"
                isCrossOrigin
                className={layout.cardContentButton}
                authorizationUrl={authorizationUrl}
                clientId={clientId}
                redirectUri={redirectUri}
                responseType="code"
                scope={scope}
                buttonText="Get Repositories"
                onSuccess={() => {}}
                onFailure={() => {
                  history.push("/repositories");
                }}
              />
              <br />
              <a
                href="#"
                className={layout.cardContentButton}
                onClick={() => {
                  setContent(false);
                  setTimeout(() => {
                    setContent(true);
                  }, 1500);
                }}
              >
                {!content ? "Get default Repositories" : "Refresh list"}
              </a>
              <div className={layout.cardContentRow}>
                {!content ? (
                  <label className="p-1 label-repo">
                    Repositories have not been loaded.{" "}
                  </label>
                ) : (
                  repos.map((repo, index) => (
                    <div key={index} className={layout.cardContentInter}>
                      <h5>{Object(repo)["name"]}</h5>
                      <h5>{Object(repo)["description"]}</h5>
                      <h5>{Object(repo)["language"]}</h5>
                      <a
                        className={layout.cardContentButtonFav}
                        onClick={() => {
                          favoriteHandler(index);
                          console.log("Handler index: ", index);
                        }}
                      >
                        {Object(repos)[index].favorite ? (
                          <StarFill color="#ffc107" size={20} />
                        ) : (
                          <Star color="" size={20} />
                        )}
                        {console.log(
                          "Favorite of index: ",
                          index,
                          "Object favorite:  ",
                          Object(repos)[index].favorite
                        )}
                      </a>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoriesPage;
