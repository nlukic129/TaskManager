import classes from "./TextArea.module.css";

interface TexAreaProps {
  label: string;
}

const TexArea = ({ label }: TexAreaProps) => {
  return <textarea placeholder={label} rows={5} className={classes.text_area}></textarea>;
};

export default TexArea;
