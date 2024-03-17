import classes from "./Filters.module.css";
import Search from "../UI/Search";
import Checkbox from "../UI/Checkbox";
import { taskStatus } from "../../store/TaskSlice";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "../../store/TaskSlice";

const Filters = () => {
  const dispatch = useDispatch();

  const onCheckHandler = (status: taskStatus) => {
    dispatch(setStatusFilter(status));
  };

  return (
    <div className={classes.filters}>
      <Search />
      <hr />
      <div className={classes.checkboxes}>
        <h1>
          <span>Filter by Status</span>
        </h1>
        <Checkbox id="in_progress" title="In Progress" onCheckStatus={onCheckHandler} statusType={taskStatus.PROGRESS} />
        <Checkbox id="done" title="Done" onCheckStatus={onCheckHandler} statusType={taskStatus.DONE} />
      </div>
    </div>
  );
};

export default Filters;
