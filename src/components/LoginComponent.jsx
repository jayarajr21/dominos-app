import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import dominosApi from "../api/Dominos";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext);
  const [login, setLogin] = useState({ userName: "", password: "" });

  const loginAPI = (event) => {
    event.preventDefault();

    dominosApi
      .post(`/auth/login`, {
        userName: login.userName,
        password: login.password,
      })
      .then((res) => {
        if (res.data.data) {
          let loggedInUser = res.data.data;
          loggedInUser.isLoggedIn = true;
          setLoggedInUser(loggedInUser);
          navigate("/");
        } else if (res.data.error) {
          console.log(res.data.error.message);
        } else {
          console.log("Something went wrong");
        }
      })
      .catch((error) => {
        console.log(`Error -> ${error}`);
      });
  };

  return (
    <div>
      <form style={{ margin: 50 }}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="UserName"
            value={login.userName}
            onChange={(event) => {
              setLogin({ ...login, userName: event.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={login.password}
            onChange={(event) => {
              setLogin({ ...login, password: event.target.value });
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => loginAPI(event)}
        >
          Login
        </button>
        <p className="text-start mt-3">
          Not registered? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};
export default LoginComponent;
