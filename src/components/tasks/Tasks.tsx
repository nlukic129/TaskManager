import classes from "./Tasks.module.css";
import Task from "../UI/Task";
import { ITask, changeTaskStatus, setTasks, taskStatus } from "../../store/TaskSlice";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal";
import TaskDetails from "../taskDetails/TaskDetails";
import { DragDropContext, Draggable, DraggableStateSnapshot, DropResult, Droppable } from "@hello-pangea/dnd";
import { fetchTasks, parseTasks } from "../../utils/tasks";

const Tasks = () => {
  const statusFilter = useSelector((state: any) => state.taskManager.statusFilter);
  const searchPerson = useSelector((state: any) => state.taskManager.searchPerson);
  const doneTasks: ITask[] = useSelector((state: any) => state.taskManager.tasks[taskStatus.DONE]);
  const inProgressTasks: ITask[] = useSelector((state: any) => state.taskManager.tasks[taskStatus.PROGRESS]);
  const [inProgressTasksFiltered, setInProgressTasksFiltered] = useState<ITask[]>(doneTasks);
  const [doneTasksFiltered, setDoneTasksFiltered] = useState<ITask[]>(inProgressTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskDetails, setTaskDetails] = useState<ITask | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTasks().then((tasks) => dispatch(setTasks(tasks)));
  }, []);

  useEffect(() => {
    if (searchPerson.length === 0) {
      setInProgressTasksFiltered([...inProgressTasks]);
      setDoneTasksFiltered([...doneTasks]);
      return;
    }
    setInProgressTasksFiltered(inProgressTasks.filter((task) => task.responsiblePerson.toLowerCase().includes(searchPerson.toLowerCase())));
    setDoneTasksFiltered(doneTasks.filter((task) => task.responsiblePerson.toLowerCase().includes(searchPerson.toLowerCase())));
  }, [searchPerson, doneTasks, inProgressTasks]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination || (destination!.droppableId === source!.droppableId && destination!.index === source!.index)) {
      return;
    }

    const task =
      source.droppableId === taskStatus.PROGRESS
        ? inProgressTasksFiltered.find((task) => task.id.toString() === draggableId)
        : doneTasksFiltered.find((task) => task.id.toString() === draggableId);

    dispatch(changeTaskStatus({ task, status: destination!.droppableId, destinationElementIndex: destination!.index }));
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const taskDetailsModal = (
    <Modal closeModal={closeModalHandler}>
      <TaskDetails {...taskDetails!} onCloseModal={closeModalHandler} />
    </Modal>
  );
  return (
    <>
      {isModalOpen && taskDetailsModal}
      <div className={classes.tasks_wrapper}>
        <div className={classes.header}>
          {statusFilter.map((status: taskStatus) => (
            <h1 key={status}>
              {status === taskStatus.DONE ? `Done(${doneTasksFiltered.length})` : `In Progress...(${inProgressTasksFiltered.length})`}
            </h1>
          ))}
        </div>
        <hr />

        <DragDropContext onDragEnd={onDragEnd}>
          <div className={classes.tasks}>
            {statusFilter.map((status: taskStatus) => (
              <div className={classes.task} key={status}>
                {status === taskStatus.PROGRESS ? (
                  <Droppable droppableId={taskStatus.PROGRESS} type="droppableItem">
                    {(provided: any) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {inProgressTasksFiltered.map((task, index) => (
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
                  <Droppable droppableId={taskStatus.DONE} type="droppableItem">
                    {(provided: any) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {doneTasksFiltered.map((task, index) => (
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
