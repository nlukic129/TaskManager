import classes from "./Filters.module.css";
import Search from "../UI/Search";
import Checkbox from "../UI/Checkbox";

const Filters = () => {
  return (
    <>
      <div className={classes.filters}>
        <div className={classes.checkboxes}>
          <Checkbox id="in_progress" title="In Progress" />
          <Checkbox id="done" title="Done" />
        </div>
        <Search />
      </div>
    </>
  );
};

export default Filters;
