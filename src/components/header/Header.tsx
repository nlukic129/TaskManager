import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={classes.header}>
        <h1>Tasks Manager</h1>
        <h1>16:30</h1>
      </div>
      <hr className={classes.hr} />
    </>
  );
};

export default Header;
