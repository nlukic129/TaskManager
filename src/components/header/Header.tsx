import { useState, useEffect } from "react";
import classes from "./Header.module.css";

const Header = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.header_wrapper}>
      <div className={classes.header}>
        <h1>Task Manager</h1>
        <h1>{currentTime}</h1>
      </div>
    </div>
  );
};

export default Header;
