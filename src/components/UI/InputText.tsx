import { useEffect, useState } from "react";
import classes from "./InputText.module.css";

interface InputTextProps {
  label: string;
  type: string;
  isError: boolean;
  value?: string;
  onInput: (input: string) => void;
}

const InputText = ({ label, type, onInput, isError, value }: InputTextProps) => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (input === "") {
      setIsFocused(false);
    }
    onInput(input);
  };

  const handleInput = (e: any) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    if (value) {
      setIsFocused(true);
      setInput(value);
    }
  }, []);

  return (
    <p className={`${classes.input_container} ${isFocused ? classes.animation + " " + classes.animationColor : ""} ${isError ? classes.error : ""}`}>
      <input type={type} id={label} className={classes.login_input} onFocus={handleFocus} onBlur={handleBlur} value={input} onChange={handleInput} />
      <label htmlFor={label}>{label}</label>
    </p>
  );
};

export default InputText;
