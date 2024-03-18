import classes from "./Tasks.module.css";
import Task from "../UI/Task";
import { ITask, taskStatus } from "../../store/TaskSlice";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import TaskDetails from "../taskDetails/TaskDetails";

const tasks1 = [
  {
    title: "title1",
    description:
      "desc1d esc1desc1desc1d esc1desc1 desc1desc1desc1desc1desc 1desc1desc 1desc1desc1d sc1desc1des c1desc1de sc1desc1 desc1des c1desc1desc1",
    status: taskStatus.PROGRESS,
    responsiblePerson: "John",
  },
  { title: "title1aaaaawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww", description: "desc1", status: taskStatus.PROGRESS, responsiblePerson: "John" },
  { title: "title2", description: "desc2", status: taskStatus.PROGRESS, responsiblePerson: "Jane" },
  { title: "title3", description: "desc3", status: taskStatus.PROGRESS, responsiblePerson: "Emmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" },
  { title: "title4", description: "desc4", status: taskStatus.PROGRESS, responsiblePerson: "Bob" },
  { title: "title5", description: "desc5", status: taskStatus.PROGRESS, responsiblePerson: "Oliver" },
  { title: "title6", description: "desc6", status: taskStatus.PROGRESS, responsiblePerson: "Alice" },
  { title: "title7", description: "desc7", status: taskStatus.PROGRESS, responsiblePerson: "Sophia" },
  { title: "title8", description: "desc8", status: taskStatus.PROGRESS, responsiblePerson: "Liam" },
  { title: "title9", description: "desc9", status: taskStatus.PROGRESS, responsiblePerson: "Ava" },
  { title: "title10", description: "desc10", status: taskStatus.PROGRESS, responsiblePerson: "Charlie" },
];
const tasks2 = [
  {
    title: "title1",
    description: "desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1desc1",
    status: taskStatus.DONE,
    responsiblePerson: "Nebojsa",
  },
  { title: "title2", description: "desc2", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title3", description: "desc3", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title4", description: "desc4", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title5", description: "desc5", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title6", description: "desc6", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title7", description: "desc7", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title8", description: "desc8", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title9", description: "desc9", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
  { title: "title10", description: "desc10", status: taskStatus.DONE, responsiblePerson: "Nebojsa" },
];

const Tasks = () => {
  const statusFilter = useSelector((state: any) => state.task.statusFilter);
  const searchPerson = useSelector((state: any) => state.task.searchPerson);
  const [inProgressTasks, setInProgressTasks] = useState<any[]>(tasks1);
  const [doneTasks, setDoneTasks] = useState<any[]>(tasks2);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskDetails, setTaskDetails] = useState<ITask | null>(null);

  useEffect(() => {
    if (searchPerson.length === 0) {
      setInProgressTasks([...tasks1]);
      setDoneTasks([...tasks2]);
      return;
    }
    const filteredInProgressTasks = tasks1.filter((task) => task.responsiblePerson.toLowerCase().includes(searchPerson.toLowerCase()));
    const filteredDoneTasks = tasks2.filter((task) => task.responsiblePerson.toLowerCase().includes(searchPerson.toLowerCase()));

    setInProgressTasks([...filteredInProgressTasks]);
    setDoneTasks([...filteredDoneTasks]);
  }, [searchPerson]);

  return (
    <>
      {isModalOpen && (
        <Modal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        >
          <TaskDetails {...taskDetails!} />
        </Modal>
      )}
      <div className={classes.tasks_wrapper}>
        <div className={classes.header}>
          {statusFilter.map((status: taskStatus) => (
            <h1 key={status}>{status === taskStatus.DONE ? `Done(${doneTasks.length})` : `In Progress...(${inProgressTasks.length})`}</h1>
          ))}
        </div>
        <hr />
        <div className={classes.tasks}>
          {statusFilter.map((status: taskStatus) => (
            <div className={classes.task} key={status}>
              {status === taskStatus.PROGRESS
                ? inProgressTasks.map((task, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{ marginBottom: 10 }}
                    >
                      <Task
                        {...task}
                        id={index}
                        onOpenDetails={(task: ITask) => {
                          setTaskDetails(task);
                          setIsModalOpen(true);
                        }}
                      />
                    </motion.div>
                  ))
                : doneTasks.map((task, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{ marginBottom: 10 }}
                    >
                      <Task
                        {...task}
                        id={index}
                        onOpenDetails={(task: ITask) => {
                          setTaskDetails(task);
                          setIsModalOpen(true);
                        }}
                      />
                    </motion.div>
                  ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
