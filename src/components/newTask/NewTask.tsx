import { useEffect, useState } from "react";
import Button, { ButtonType } from "../UI/Button";
import InputText from "../UI/InputText";
import TexArea from "../UI/TextArea";
import classes from "./NewTask.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/TaskSlice";

interface INewTask {
  onAddTask: () => void;
}

const NewTask = ({ onAddTask }: INewTask) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskResponsiblePerson, setTaskResponsiblePerson] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isTaskTitleError, setIsTaskTitleError] = useState(false);
  const [isTaskResponsiblePersonError, setIsTaskResponsiblePersonError] = useState(false);
  const [isDescriptionError, setDescriptionError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  const inputTitleHandler = (title: string) => {
    setTaskTitle(title);
    setIsTaskTitleError(!title.trim().length);
  };

  const inputPersonHandler = (person: string) => {
    setTaskResponsiblePerson(person);
    setIsTaskResponsiblePersonError(!person.trim().length);
  };

  const inputDescriptionHandler = (description: string) => {
    setTaskDescription(description);
    setDescriptionError(!description.trim().length);
  };

  useEffect(() => {
    if (taskTitle.trim().length && taskResponsiblePerson.trim().length && taskDescription.trim().length) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [taskTitle, taskResponsiblePerson, taskDescription]);

  const addNewTaskHandler = () => {
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      status: "PROGRESS",
      responsiblePerson: taskResponsiblePerson,
      id: Math.floor(Math.random() * 100000),
    };

    dispatch(addTask(newTask));
    onAddTask();
  };

  return (
    <>
      <div className={classes.wrapper}>
        <h1>Add New Task</h1>
        <div className={classes.input_wrapper}>
          <InputText label="Task Title" type="text" onInput={inputTitleHandler} isError={isTaskTitleError} />
          <InputText label="Responsible Person" type="text" onInput={inputPersonHandler} isError={isTaskResponsiblePersonError} />
          <TexArea label="Task Description" onInput={inputDescriptionHandler} isError={isDescriptionError} />
          <div className={classes.button}>
            <Button label="Add New Task" buttonType={ButtonType.DARK_MODE} onClickButton={addNewTaskHandler} isDisabled={isButtonDisabled} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTask;
