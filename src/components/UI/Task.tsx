import classes from "./Task.module.css";

import { taskStatus } from "../../store/TaskSlice";

interface TaskProps {
  title: string;
  description: string;
  responsiblePerson: string;
  status: taskStatus;
}

const statusClasses = {
  [taskStatus.DONE]: classes.statusColorDone,
  [taskStatus.PROGRESS]: classes.statusColorInProgress,
};

const Task = ({ title, description, responsiblePerson, status }: TaskProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <div className={statusClasses[status]}></div>
        <div className={classes.data}>
          <div>
            <h3>{title}</h3>
            <h2>{responsiblePerson}</h2>
            <p className={classes.description}>{description}</p>
          </div>
        </div>
      </div>
      <div className={classes.details}>
        <span>Details...</span>
      </div>
    </div>
  );
};

export default Task;
