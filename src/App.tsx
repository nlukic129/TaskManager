import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import classes from "./App.module.css";
import Tasks from "./components/tasks/Tasks";
import Login from "./components/login/Login";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Registration from "./components/registration/Registration";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "./store/UserSlice";
import MobileMenu from "./components/UI/MobileMenu";

function App() {
  const [showLoginPage, setShowLoginPage] = useState(true);
  const isUserLoggedIn = useSelector((state: any) => state.user.isUserLoggedIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const onLoginHandler = () => {
    dispatch(loginUser());
  };

  const onRegisterHandler = () => {
    setShowLoginPage(true);
  };

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };
  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <MobileMenu isOpen={isMenuOpen} onCloseMenu={closeMenuHandler} />
      <Header onOpenMenu={openMenuHandler} />
      <AnimatePresence mode="wait">
        {!isUserLoggedIn ? (
          showLoginPage ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              exit={{ opacity: 0, x: -200 }}
              style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
            >
              <Login
                onLogin={onLoginHandler}
                onSwitchToSignUp={() => {
                  setShowLoginPage(false);
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              key="logout"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0, x: -200 }}
              style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
            >
              <Registration
                onRegister={onRegisterHandler}
                onSwitchToLogin={() => {
                  setShowLoginPage(true);
                }}
              />
            </motion.div>
          )
        ) : (
          <motion.div
            className={classes.tasks}
            key="tasks"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Filters onOpenModal={closeMenuHandler} />
            <Tasks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
