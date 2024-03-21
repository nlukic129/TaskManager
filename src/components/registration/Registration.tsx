import { useState } from "react";
import Button, { ButtonType } from "../UI/Button";
import InputText from "../UI/InputText";
import classes from "./Registration.module.css";

interface RegistrationProps {
  onSwitchToLogin: () => void;
}

const Registration = ({ onSwitchToLogin }: RegistrationProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);

  const LoginHandler = () => {
    onSwitchToLogin();
  };

  const onInputNameHandler = (name: string) => {
    setName(name);
    setIsNameError(!name.trim().length);
  };

  const onInputEmailHandler = (email: string) => {
    setEmail(email);
    setIsEmailError(!email.includes("@") || !email.trim().length);
  };

  const onInputPasswordHandler = (password: string) => {
    setPassword(password);
    setIsPasswordError(!password.trim().length);
  };

  const onInputConfirmPasswordHandler = (confirmPassword: string) => {
    setConfirmPassword(confirmPassword);
    setIsConfirmPasswordError(confirmPassword !== password || !confirmPassword.trim().length);
  };

  const signUpUserHandler = () => {
    console.log("Sign up user");
  };

  return (
    <div className={classes.wrapper}>
      <h1>Registration</h1>
      <InputText label="Name" type="text" onInput={onInputNameHandler} isError={isNameError} />
      <InputText label="Email" type="text" onInput={onInputEmailHandler} isError={isEmailError} />
      <InputText label="Password" type="password" onInput={onInputPasswordHandler} isError={isPasswordError} />
      <InputText label="Confirm Password" type="password" onInput={onInputConfirmPasswordHandler} isError={isConfirmPasswordError} />
      <Button label="Sign Up" buttonType={ButtonType.LIGHT_MODE} onClickButton={signUpUserHandler} />
      <div className={classes.login_wrapper}>
        <p className={classes.login_message}>Already have an account?</p>
        <p className={classes.login} onClick={LoginHandler}>
          LOG IN
        </p>
      </div>
    </div>
  );
};

export default Registration;
