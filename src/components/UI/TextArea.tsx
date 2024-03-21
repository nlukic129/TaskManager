import classes from "./TextArea.module.css";

interface TexAreaProps {
  label: string;
  isError: boolean;
  onInput: (value: string) => void;
}

const TexArea = ({ label, onInput, isError }: TexAreaProps) => {
  const inputTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInput(e.target.value);
  };

  return (
    <textarea placeholder={label} rows={5} className={`${classes.text_area} ${isError ? classes.error : ""}`} onChange={inputTextHandler}></textarea>
  );
};

export default TexArea;
