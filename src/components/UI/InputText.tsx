import { useRef, useState } from "react";
import classes from "./InputText.module.css";

interface InputTextProps {
  label: string;
  type: string;
}

const InputText = ({ label, type }: InputTextProps) => {
  const input = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (input.current && input.current.value === "") {
      setIsFocused(false);
    }
  };

  return (
    <p className={`${classes.input_container} ${isFocused ? classes.animation + " " + classes.animationColor : ""}`}>
      <input type={type} id="input-username" className={classes.login_input} ref={input} onFocus={handleFocus} onBlur={handleBlur} />
      <label htmlFor="input-username">{label}</label>
    </p>
  );
};

export default InputText;
