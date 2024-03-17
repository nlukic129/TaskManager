import classes from "./Filters.module.css";
import Search from "../UI/Search";
import Checkbox from "../UI/Checkbox";

const Filters = () => {
  return (
    <>
      <div className={classes.filters}>
        <Search />
        <hr />
        <div className={classes.checkboxes}>
          <h1>
            <span>Filter by Status</span>
          </h1>
          <Checkbox id="in_progress" title="In Progress" />
          <Checkbox id="done" title="Done" />
        </div>
      </div>
    </>
  );
};

export default Filters;
