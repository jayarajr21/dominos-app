import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dominosApi from "../api/api";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    userName: "",
    phoneNumber: "",
    password: "",
  });

  const registerApi = (event) => {
    event.preventDefault();
    dominosApi
      .post("/auth/register", {
        userName: register.userName,
        phoneNumber: register.phoneNumber,
        password: register.password,
      })
      .then((res) => {
        if (res.data.data) {
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
      <div>
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              value={register.userName}
              onChange={(event) => {
                setRegister({ ...register, userName: event.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={register.password}
              onChange={(event) => {
                setRegister({ ...register, password: event.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="phonenumber"
              className="form-control"
              placeholder="phonenumber"
              value={register.phoneNumber}
              onChange={(event) => {
                setRegister({ ...register, phoneNumber: event.target.value });
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => registerAPI(event)}
          >
            Register
          </button>
          <p className="text-start mt-3">
            Registered? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
