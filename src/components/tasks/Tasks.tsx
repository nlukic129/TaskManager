import classes from "./Tasks.module.css";
import Task from "../UI/Task";
import { taskStatus } from "../../store/TaskSlice";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const tasks1 = [
  {
    title: "title1",
    description: "desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1",
    status: taskStatus.PROGRESS,
  },
  { title: "title2", description: "desc2", status: taskStatus.PROGRESS },
  { title: "title3", description: "desc3", status: taskStatus.PROGRESS },
  { title: "title4", description: "desc4", status: taskStatus.PROGRESS },
  { title: "title5", description: "desc5", status: taskStatus.PROGRESS },
  { title: "title6", description: "desc6", status: taskStatus.PROGRESS },
  { title: "title7", description: "desc7", status: taskStatus.PROGRESS },
  { title: "title8", description: "desc8", status: taskStatus.PROGRESS },
  { title: "title9", description: "desc9", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS },
];
const tasks2 = [
  {
    title: "title1",
    description: "desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1",
    status: taskStatus.DONE,
  },
  { title: "title2", description: "desc2", status: taskStatus.DONE },
  { title: "title3", description: "desc3", status: taskStatus.DONE },
  { title: "title4", description: "desc4", status: taskStatus.DONE },
  { title: "title5", description: "desc5", status: taskStatus.DONE },
  { title: "title6", description: "desc6", status: taskStatus.DONE },
  { title: "title7", description: "desc7", status: taskStatus.DONE },
  { title: "title8", description: "desc8", status: taskStatus.DONE },
  { title: "title9", description: "desc9", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
  { title: "title10", description: "desc10", status: taskStatus.DONE },
];

const Tasks = () => {
  const status = useSelector((state: any) => state.task.statusFilter);
  const [displayTitles, setDisplayTitles] = useState<JSX.Element>();
  const [displayTasks, setDisplayTasks] = useState<JSX.Element>();

  const titlesDict = {
    [taskStatus.DONE]: <h1>Done({tasks1.length})</h1>,
    [taskStatus.PROGRESS]: <h1>In Progress...({tasks2.length})</h1>,
  };
  const tasksDict = {
    [taskStatus.PROGRESS]: (
      <div className={classes.task}>
        {tasks1.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ marginBottom: 10 }}
          >
            <Task {...task} responsiblePerson="Nebojsa Lukic" />
          </motion.div>
        ))}
      </div>
    ),
    [taskStatus.DONE]: (
      <div className={classes.task}>
        {tasks2.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ marginBottom: 10 }}
          >
            <Task {...task} responsiblePerson="Nebojsa Lukic" />
          </motion.div>
        ))}
      </div>
    ),
  };

  useEffect(() => {
    setDisplayTitles(status.map((status: taskStatus) => titlesDict[status]));
    setDisplayTasks(status.map((status: taskStatus) => tasksDict[status]));
  }, [status]);

  return (
    <div className={classes.tasks_wrapper}>
      <div className={classes.header}>{displayTitles}</div>
      <hr />
      <div className={classes.tasks}>{displayTasks}</div>
    </div>
  );
};

export default Tasks;
