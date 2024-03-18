import Button from "../UI/Button";
import InputText from "../UI/InputText";
import classes from "./Registration.module.css";

interface RegistrationProps {
  onSwitchToLogin: () => void;
}

const Registration = ({ onSwitchToLogin }: RegistrationProps) => {
  const LoginHandler = () => {
    onSwitchToLogin();
  };

  return (
    <div className={classes.wrapper}>
      <h1>Registration</h1>
      <InputText label="Name" type="text" />
      <InputText label="Email" type="text" />
      <InputText label="Password" type="password" />
      <InputText label="Confirm Password" type="password" />
      <Button label="Sign Up" />
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
