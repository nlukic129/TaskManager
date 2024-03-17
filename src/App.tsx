import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import classes from "./App.module.css";
import Tasks from "./components/tasks/Tasks";

function App() {
  return (
    <>
      <Header />
      <div className={classes.tasks}>
        <Filters />
        <Tasks />
      </div>
    </>
  );
}

export default App;
