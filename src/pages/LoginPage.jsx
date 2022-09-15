import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import AuthComponent from "../components/AuthComponent";
import LoginComponent from "../components/LoginComponent";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const LoginPage = () => { 
  return (
    <AuthComponent>
      <MDBContainer fluid>
      <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Login
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Your Name"
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput label="Password" id="form3" type="password" />
              </div>
<Link  to ="/login">
              <MDBBtn className="mb-4" size="lg">
                Login
              </MDBBtn>
              <p className="text-start mt-3">
            Not Registered? <Link to="/register">Register</Link>
            </p></Link>
            </MDBCol>
            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <Image className="w-50"
                src={require("../assets/images/logo.png")}
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </AuthComponent>
  );
};

export default LoginPage;
