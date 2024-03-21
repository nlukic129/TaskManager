import { useState, useEffect } from "react";
import classes from "./Header.module.css";
import menu from "../../assets/images/menu-burger.png";
import { useSelector } from "react-redux";

interface HeaderProps {
  onOpenMenu: () => void;
}

const Header = ({ onOpenMenu }: HeaderProps) => {
  const [currentTime, setCurrentTime] = useState("");
  const isUserLoggedIn = useSelector((state: any) => state.user.isUserLoggedIn);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      setCurrentTime(`${hours}:${minutes}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const openMenuHandler = () => {
    onOpenMenu();
  };

  return (
    <div className={classes.header_wrapper}>
      <div className={classes.header}>
        {isUserLoggedIn && <img className={classes.menu} src={menu} alt="menu-burger" onClick={openMenuHandler} />}
        <h1>Task Manager</h1>
        <h1 className={classes.time}>{currentTime}</h1>
      </div>
    </div>
  );
};

export default Header;
