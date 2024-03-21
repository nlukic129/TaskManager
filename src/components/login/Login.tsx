import { useEffect, useState } from "react";
import Button, { ButtonType } from "../UI/Button";
import InputText from "../UI/InputText";
import classes from "./Login.module.css";

interface LoginProps {
  onSwitchToSignUp: () => void;
  onLogin: () => void;
}

const Login = ({ onSwitchToSignUp, onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const signUpHandler = () => {
    onSwitchToSignUp();
  };

  const onInputEmailHandler = (email: string) => {
    setEmail(email);
    setIsEmailError(!email.trim().length);
  };

  const onInputPasswordHandler = (password: string) => {
    setPassword(password);
    setIsPasswordError(!password.trim().length);
  };

  useEffect(() => {
    if (!email.trim().length && !password.trim().length) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [email, password]);

  const loginUserHandler = () => {
    onLogin();
  };

  return (
    <div className={classes.wrapper}>
      <h1>Login</h1>
      <InputText label="Email" type="text" onInput={onInputEmailHandler} isError={isEmailError} />
      <InputText label="Password" type="password" onInput={onInputPasswordHandler} isError={isPasswordError} />
      <Button label="Log In Now" buttonType={ButtonType.LIGHT_MODE} onClickButton={loginUserHandler} isDisabled={isButtonDisabled} />
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
