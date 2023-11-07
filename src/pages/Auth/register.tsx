import React from "react";
import { useNavigate } from "react-router-dom";

type FormConfig = {
  title: string;
  placeholder: string;
  name: string;
  value?: string;
  type: string;
  error: boolean;
  valid: boolean;
};

const Register = () => {
  const navigate = useNavigate();
  const [incorrectPassword, setIncorrectPassword] = React.useState(false);
  const [accountCreated, setAccountCreated] = React.useState(false);
  const [formData, setFormData] = React.useState<FormConfig[]>([
    {
      title: "Name",
      placeholder: "Ex. John Doe",
      name: "name",
      value: "",
      type: "text",
      error: false,
      valid: false,
    },
    {
      title: "Email",
      placeholder: "abc@email.com",
      name: "email",
      value: "",
      type: "email",
      error: false,
      valid: false,
    },
    {
      title: "Password",
      placeholder: "********",
      name: "password",
      value: "",
      type: "password",
      error: false,
      valid: false,
    },
    {
      title: "Re-enter Password",
      placeholder: "********",
      name: "confirmPassword",
      value: "",
      type: "password",
      error: false,
      valid: false,
    },
  ]);

  const checkValidation = () => {};

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {};

  const handleSignUp = async (e: React.BaseSyntheticEvent) => {};

  const handleSignInClick = () => {
    navigate({
      pathname: "/signin",
    });
  };

  return (
    <div className="auth-form">
      <p className="auth-header">Create an Account</p>
      <div style={{ maxHeight: "35rem" }}>
        {accountCreated && (
          <>
            <p className="register-success-heading">Account Created</p>
            <button
              className="large-primary-btn"
              style={{
                width: "100%",
              }}
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </>
        )}
        {!accountCreated && (
          <form onSubmit={handleSignUp}>
            {formData.map((item, index) => {
              return (
                <div key={index}>
                  <p className="input-title">{item.title}</p>
                  <input
                    className="input-main"
                    autoComplete={item.type === "password" ? "off" : "on"}
                    type={item.type}
                    defaultValue={item?.value}
                    onChange={handleInputChange}
                    name={item.name}
                    placeholder={item.placeholder}
                  />
                  <div className="error-container">
                    {item.error && (
                      <p className="error-text required-error-text-space">
                        Required field!
                      </p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="error-container">
              {incorrectPassword && (
                <p className="error-text">Password doesn't match</p>
              )}
            </div>

            <button
              type="submit"
              className="large-primary-btn"
              style={{
                width: "100%",
                margin: "2rem 0",
              }}
            >
              Sign Up
            </button>
            <button
              className="large-secondary-btn"
              style={{
                width: "100%",
              }}
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
