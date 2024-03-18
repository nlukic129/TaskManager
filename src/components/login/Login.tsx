import Button from "../UI/Button";
import InputText from "../UI/InputText";
import classes from "./Login.module.css";

interface LoginProps {
  onSwitchToSignUp: () => void;
}

const Login = ({ onSwitchToSignUp }: LoginProps) => {
  const signUpHandler = () => {
    onSwitchToSignUp();
  };

  return (
    <div className={classes.wrapper}>
      <h1>Login</h1>
      <InputText label="Email" type="text" />
      <InputText label="Password" type="password" />
      <Button label="Log In Now" />
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
