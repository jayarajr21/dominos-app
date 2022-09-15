import React from "react";

const AuthWrapper = ({ children }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">{children}</div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default AuthWrapper;
