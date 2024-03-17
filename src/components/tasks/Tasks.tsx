import classes from "./Tasks.module.css";
import Task from "../UI/Task";
import { taskStatus } from "../../store/TaskSlice";
import { useEffect, useState } from "react";

const Tasks = () => {
  const tasks = [
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

  return (
    <div className={classes.tasks_wrapper}>
      <div className={classes.header}>
        <h1>In Progress...(22)</h1>
        <h1>Done(15)</h1>
      </div>
      <hr />
      <div className={classes.tasks}>
        <div className={classes.task}>
          {tasks.map((task) => (
            <Task {...task} responsiblePerson="Nebojsa Lukic" />
          ))}
        </div>
        <div className={classes.task}>
          {tasks2.map((task) => (
            <Task {...task} responsiblePerson="Nebojsa Lukic" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
