import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={classes.tasks}>
        <Filters />
      </div>
    </>
  );
}

export default App;
