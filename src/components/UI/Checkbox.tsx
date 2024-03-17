import classes from "./Checkbox.module.css";

type CheckboxProps = {
  id: string;
  title: string;
};

const Checkbox = ({ id, title }: CheckboxProps) => {
  return (
    <>
      <div className={classes.cb}>
        <div className={classes.cb_wrapper}>
          <input type="checkbox" className={classes._checkbox} id={id} />
          <label htmlFor={id} className={classes.label}>
            <div id="tick_mark" className={classes.tick_mark}></div>
          </label>
        </div>
        <p>{title}</p>
      </div>
    </>
  );
};

export default Checkbox;
