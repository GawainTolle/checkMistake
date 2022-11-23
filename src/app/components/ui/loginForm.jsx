import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };
  useEffect(() => {
    validate();
  }, [data]);
  const validatorConfig = {
    email: {
      isRequired: { message: "Email should be filled" },
      isEmail: { message: "Email insurt incorrectly" }
    },
    password: {
      isRequired: { message: "Password should be filled" },
      isCapitalSymbol: {
        message: "Should contain at least one capital latter"
      },
      isContainDigit: { message: "Should contain at least one number" },
      min: { message: "Password should be at least with 8 symbols", value: 8 }
    }
  };
  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              {...{
                label: "Электронная почта",
                name: "email",
                value: data.email,
                onChange: handleChange,
                error: errors.email
              }}
            />
            <TextField
              {...{
                label: "Пароль",
                name: "password",
                type: "password",
                value: data.password,
                onChange: handleChange,
                error: errors.password
              }}
            />
            <button
              type="submit"
              disabled={!isValid}
              className="btn btn-primary w-100 mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
