import React from "react";
import InputType from "../../Components/shared/form/InputType";
import Form from "../../Components/shared/form/Form";

const Login = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="./assets/images/banner1.jpg" alt="Login Image" />
        </div>
        <div className="col-md-4 form-container">
          <Form submitButton={"Login"} formTitle={"Login"} formType={"login"} />
        </div>
      </div>
    </>
  );
};

export default Login;
