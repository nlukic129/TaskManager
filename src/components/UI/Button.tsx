import classes from "./Button.module.css";

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <div className={classes.block_wrapper}>
      <div id="defnic" className={classes.gps_button_wrapper}>
        <button className={classes.gps_button}>{label}</button>
      </div>
    </div>
  );
};

export default Button;
