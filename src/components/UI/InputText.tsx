import { useRef, useState } from "react";
import classes from "./InputText.module.css";

interface InputTextProps {
  label: string;
  type: string;
  isError: boolean;
  onInput: (input: string) => void;
}

const InputText = ({ label, type, onInput, isError }: InputTextProps) => {
  const input = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (input.current!.value === "") {
      setIsFocused(false);
    }
    onInput(input.current!.value);
  };

  return (
    <p className={`${classes.input_container} ${isFocused ? classes.animation + " " + classes.animationColor : ""} ${isError ? classes.error : ""}`}>
      <input type={type} id={label} className={classes.login_input} ref={input} onFocus={handleFocus} onBlur={handleBlur} />
      <label htmlFor={label}>{label}</label>
    </p>
  );
};

export default InputText;
