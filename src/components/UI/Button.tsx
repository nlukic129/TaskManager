import classes from "./Button.module.css";

export enum ButtonType {
  DARK_MODE = "darkMode",
  LIGHT_MODE = "lightMode",
}

interface ButtonProps {
  label: string;
  buttonType: ButtonType;
}

const Button = ({ label, buttonType }: ButtonProps) => {
  return (
    <div className={classes.block_wrapper}>
      <div className={classes.gps_button_wrapper}>
        <button className={buttonType === ButtonType.DARK_MODE ? classes.gps_button : classes.gps_button_light}>{label}</button>
      </div>
    </div>
  );
};

export default Button;
