/*eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";
const LOGIN_SUCCESS_PAGE = "/profile";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "rovch.auth0.com",
    clientID: "CEp9NWpVhZDzgR8amCVOPiDlGCGNJL8x",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://rovch.auth0.com/api/v2/",
    responseType: "token id_token",
    scope: "openid profile"
  });



  constructor() {
    this.login = this.login.bind(this);
  };

  login() {
    this.auth0.authorize();
  };

  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        var expiresAt = JSON.stringify(
          authResults.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
        location.hash = "";
        location.pathname = LOGIN_SUCCESS_PAGE;
        console.log(authResults);
      } else if (err) {
        location.pathname = LOGIN_FAILURE_PAGE;
        console.log(err);
        console.log(authResults);
      };
    });
  };

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  };

  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    location.pathname = LOGIN_FAILURE_PAGE;
  };

  getProfile() {
    if (localStorage.getItem("id_token")) {
      return jwtDecode(localStorage.getItem("id_token"));

    } else {
      return {};
    };
  };
};