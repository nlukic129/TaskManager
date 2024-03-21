import classes from "./Button.module.css";

export enum ButtonType {
  DARK_MODE = "darkMode",
  LIGHT_MODE = "lightMode",
}

interface ButtonProps {
  label: string;
  buttonType: ButtonType;
  onClickButton: () => void;
  isDisabled?: boolean;
}

const Button = ({ label, buttonType, onClickButton, isDisabled }: ButtonProps) => {
  return (
    <div className={classes.block_wrapper}>
      <div className={classes.gps_button_wrapper}>
        <button
          className={`${!isDisabled ? (buttonType === ButtonType.DARK_MODE ? classes.gps_button : classes.gps_button_light) : classes.disabled}`}
          disabled={isDisabled}
          onClick={() => {
            onClickButton();
          }}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export default Button;
