import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../Services/authService";

const Form = ({ formType, submitButton, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          if (formType === "login") return handleLogin(e, email, password,role);
          else if (formType === "register")
            return handleRegister(
              e,
              email,
              password,
              role,
              name,
              organizationName,
              hospitalName,
              website,
              address,
              phone
            );
          e.preventDefault();
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr />

        <div className="d-flex mb-3">
          <div className="form-check p-0">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donorRadio"
              value="donor"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "donor"}
            />
            <label htmlFor="donorRadio" className="form-check-label">
              Donor
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="adminRadio"
              value="admin"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "admin"}
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value="hospital"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "hospital"}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organizationRadio"
              value="organization"
              onChange={(e) => setRole(e.target.value)}
              checked={role === "organization"}
            />
            <label htmlFor="organizationRadio" className="form-check-label">
              Organization
            </label>
          </div>
        </div>

        {formType === "register" && (
          <>
            {(role === "admin" || role === "donor") && (
              <InputType
                labelText="Your Name"
                labelFor="forName"
                name="name"
                inputType="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            {role === "organization" && (
              <InputType
                labelText="Organization Name"
                labelFor="forOrganizationName"
                name="organizationName"
                inputType="text"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
              />
            )}

            {role === "hospital" && (
              <InputType
                labelText="Hospital Name"
                labelFor="forHospitalName"
                name="hospitalName"
                inputType="text"
                value={hospitalName}
                onChange={(e) => setHospitalName(e.target.value)}
              />
            )}
          </>
        )}

        <InputType
          labelText="Your Email"
          labelFor="forEmail"
          name="email"
          inputType="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputType
          labelText="Your Password"
          labelFor="forPassword"
          name="password"
          inputType="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        {formType === "register" && (
          <>
            <InputType
              labelText="Website"
              labelFor="forWebsite"
              name="website"
              inputType="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <InputType
              labelText="Address"
              labelFor="forAddress"
              name="address"
              inputType="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <InputType
              labelText="Phone"
              labelFor="forPhone"
              name="phone"
              inputType="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        )}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not Registered yet? <Link to="/register">Register</Link>
            </p>
          ) : (
            <p>
              Already a User? <Link to="/login">Login</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitButton}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
