import { ITask } from "../../store/TaskSlice";
import classes from "./TaskDetails.module.css";

const TaskDetails = ({ title, description, responsiblePerson, status, id }: ITask) => {
  return (
    <>
      <div className={classes.wrapper}>
        <span>
          title: <span className={classes.title}>{title}</span>
        </span>
        <br />
        <span>
          responsible person: <span className={classes.responsible_person}>{responsiblePerson}</span>
        </span>
        <br />
        <span>
          status: <span className={classes.responsible_person}>{status}</span>
        </span>
        <br />
        <span>
          description: <p className={classes.description}>{description}</p>
        </span>
        <br />
      </div>
    </>
  );
};

export default TaskDetails;
