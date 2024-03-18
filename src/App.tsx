import Header from "./components/header/Header";
import Filters from "./components/filters/Filters";
import classes from "./App.module.css";
import Tasks from "./components/tasks/Tasks";
import Login from "./components/login/Login";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Registration from "./components/registration/Registration";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        {!isUserLoggedIn ? (
          isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.1 }}
              exit={{ opacity: 0, x: -200 }}
              style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
            >
              <Login
                onSwitchToSignUp={() => {
                  setIsLogin(false);
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
                onSwitchToLogin={() => {
                  setIsLogin(true);
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
            <Filters />
            <Tasks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
