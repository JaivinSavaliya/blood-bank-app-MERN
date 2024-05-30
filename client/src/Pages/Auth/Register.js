import React from "react";
import Form from "../../Components/shared/form/Form";

const Register = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="./assets/images/banner2.jpg" alt="Register Image" />
        </div>
        <div className="col-md-4 form-container">
          <Form
            submitButton={"Register"}
            formTitle={"Register"}
            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
