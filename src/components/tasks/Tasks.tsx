import classes from "./Tasks.module.css";
import Task from "../UI/Task";
import { ITask, taskStatus } from "../../store/TaskSlice";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import TaskDetails from "../taskDetails/TaskDetails";
import { DragDropContext, Draggable, DraggableStateSnapshot, Droppable } from "@hello-pangea/dnd";

const tasks1 = [
  {
    title: "Meeting with the Client",
    description: "Prepare presentation and allocate tasks for the team.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "John",
    id: 0,
  },
  {
    title: "Development of New Feature",
    description: "Implement user interface for the new module.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "Jane",
    id: 1,
  },
  {
    title: "Application Testing",
    description: "Check functionality correctness in various scenarios.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "John",
    id: 2,
  },
  {
    title: "Presentation Preparation",
    description: "Prepare presentation slides and materials.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "Jane",
    id: 3,
  },
  {
    title: "Server Infrastructure Maintenance",
    description: "Update security patches and performance optimization.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "John",
    id: 4,
  },
  {
    title: "Reviewing Codebase",
    description: "Review the codebase and resolve open tasks.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "Jane",
    id: 5,
  },
  {
    title: "Team Meeting",
    description: "Discuss new ideas and plan next steps.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "John",
    id: 6,
  },
  {
    title: "Setting User Privileges",
    description: "Assign appropriate privileges to users.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "Jane",
    id: 7,
  },
  {
    title: "Database Optimization",
    description: "Optimize queries and index tables.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "John",
    id: 8,
  },
  {
    title: "Researching New Technologies",
    description: "Study the latest technological trends and tools.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "Jane",
    id: 9,
  },
  {
    title: "Updating User Documentation",
    description: "Update and improve user documentation.",
    status: taskStatus.PROGRESS,
    responsiblePerson: "John",
    id: 10,
  },
];
const tasks2 = [
  {
    title: "Security Testing",
    description: "Check application security through penetration testing.",
    status: taskStatus.DONE,
    responsiblePerson: "Jane",
    id: 11,
  },
  {
    title: "Implementing New Design",
    description: "Implement new user interface based on design specifications.",
    status: taskStatus.DONE,
    responsiblePerson: "John",
    id: 12,
  },
  {
    title: "Marketing Plan Development",
    description: "Plan marketing activities for the next quarter.",
    status: taskStatus.DONE,
    responsiblePerson: "Jane",
    id: 13,
  },
  {
    title: "Market Research",
    description: "Analyze competition and identify new opportunities.",
    status: taskStatus.DONE,
    responsiblePerson: "John",
    id: 14,
  },
  {
    title: "Product Presentation Preparation",
    description: "Prepare materials for product promotion at a conference.",
    status: taskStatus.DONE,
    responsiblePerson: "Jane",
    id: 15,
  },
  {
    title: "Customer Support System Maintenance",
    description: "Address customer requests and resolve issues.",
    status: taskStatus.DONE,
    responsiblePerson: "John",
    id: 16,
  },
  {
    title: "Corporate Training Planning",
    description: "Plan and organize training for employees.",
    status: taskStatus.DONE,
    responsiblePerson: "Jane",
    id: 17,
  },
  {
    title: "Updating Mobile Application",
    description: "Update and enhance mobile application functionality.",
    status: taskStatus.DONE,
    responsiblePerson: "John",
    id: 18,
  },
  {
    title: "Customer Data Analysis",
    description: "Analyze customer data to improve user experience.",
    status: taskStatus.DONE,
    responsiblePerson: "Jane",
    id: 19,
  },
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

  const taskDetailsModal = (
    <Modal
      closeModal={() => {
        setIsModalOpen(false);
      }}
    >
      <TaskDetails {...taskDetails!} />
    </Modal>
  );

  const onDragEnd = (result: any) => {
    console.log(result);
  };
  return (
    <>
      {isModalOpen && taskDetailsModal}
      <div className={classes.tasks_wrapper}>
        <div className={classes.header}>
          {statusFilter.map((status: taskStatus) => (
            <h1 key={status}>{status === taskStatus.DONE ? `Done(${doneTasks.length})` : `In Progress...(${inProgressTasks.length})`}</h1>
          ))}
        </div>
        <hr />

        <DragDropContext onDragEnd={onDragEnd}>
          <div className={classes.tasks}>
            {statusFilter.map((status: taskStatus) => (
              <div className={classes.task} key={status}>
                {status === taskStatus.PROGRESS ? (
                  <Droppable droppableId="InProgress" type="droppableItem">
                    {(provided: any) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {inProgressTasks.map((task, index) => (
                          <Draggable draggableId={task.id.toString()} key={task.id} index={task.id}>
                            {(provided: any, snapshot: DraggableStateSnapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps} // Provjerite da li ste dodijelili dragHandleProps
                              >
                                <motion.div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
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
                                  {provided.placeholder}
                                </motion.div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                ) : (
                  <Droppable droppableId="Done" type="droppableItem">
                    {(provided: any) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {doneTasks.map((task, index) => (
                          <Draggable draggableId={task.id.toString()} key={task.id} index={task.id}>
                            {(provided: any, snapshot: DraggableStateSnapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps} // Provjerite da li ste dodijelili dragHandleProps
                              >
                                <motion.div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
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
                                  {provided.placeholder}
                                </motion.div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                      </div>
                    )}
                  </Droppable>
                )}
              </div>
            ))}
          </div>
        </DragDropContext>
      </div>
    </>
  );
};

export default Tasks;
