import { useEffect, useState } from "react";
import classes from "./TextArea.module.css";

interface TexAreaProps {
  label: string;
  isError: boolean;
  value?: string;
  onInput: (value: string) => void;
}

const TexArea = ({ label, onInput, isError, value }: TexAreaProps) => {
  const [input, setInput] = useState("");

  const handleInput = (e: any) => {
    setInput(e.target.value);
    onInput(e.target.value);
  };

  useEffect(() => {
    if (value) {
      setInput(value);
    }
  }, []);

  return (
    <textarea
      placeholder={label}
      rows={5}
      className={`${classes.text_area} ${isError ? classes.error : ""}`}
      onChange={handleInput}
      value={input}
    ></textarea>
  );
};

export default TexArea;
