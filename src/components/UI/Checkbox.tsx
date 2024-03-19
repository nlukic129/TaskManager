import classes from "./Checkbox.module.css";
import { TaskState, taskStatus } from "../../store/TaskSlice";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

type CheckboxProps = {
  id: string;
  title: string;
  onCheckStatus: (status: taskStatus) => void;
  statusType: taskStatus;
};

const Checkbox = ({ id, title, onCheckStatus, statusType }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const status = useSelector((state: any) => state.taskManager.statusFilter);

  useEffect(() => {
    status.includes(statusType) ? setIsChecked(true) : setIsChecked(false);
  }, [status]);

  const clickHandler = () => {
    onCheckStatus(statusType);
  };

  return (
    <div className={classes.cb}>
      <div className={classes.cb_wrapper}>
        <input type="checkbox" className={classes._checkbox} id={id} checked={isChecked} onClick={clickHandler} />
        <label htmlFor={id} className={classes.label}>
          <div id="tick_mark" className={classes.tick_mark}></div>
        </label>
      </div>
      <label onClick={clickHandler}>{title}</label>
    </div>
  );
};

export default Checkbox;
