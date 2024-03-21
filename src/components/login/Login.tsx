import { useState } from "react";
import Button, { ButtonType } from "../UI/Button";
import InputText from "../UI/InputText";
import classes from "./Login.module.css";

interface LoginProps {
  onSwitchToSignUp: () => void;
}

const Login = ({ onSwitchToSignUp }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const signUpHandler = () => {
    onSwitchToSignUp();
  };

  const onInputEmailHandler = (email: string) => {
    setEmail(email);
    setIsEmailError(!email.includes("@") || !email.trim().length);
  };

  const onInputPasswordHandler = (password: string) => {
    setPassword(password);
    setIsPasswordError(!password.trim().length);
  };

  const loginUserHandler = () => {
    console.log("Login user");
  };

  return (
    <div className={classes.wrapper}>
      <h1>Login</h1>
      <InputText label="Email" type="text" onInput={onInputEmailHandler} isError={isEmailError} />
      <InputText label="Password" type="password" onInput={onInputPasswordHandler} isError={isPasswordError} />
      <Button label="Log In Now" buttonType={ButtonType.LIGHT_MODE} onClickButton={loginUserHandler} />
      <div className={classes.sign_up_wrapper}>
        <p className={classes.sign_up_message}>Or Sign Up Using</p>
        <p className={classes.sign_up} onClick={signUpHandler}>
          SIGN UP
        </p>
      </div>
    </div>
  );
};

export default Login;
