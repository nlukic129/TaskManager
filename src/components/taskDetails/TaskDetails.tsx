import { editTask, taskStatus } from "../../store/TaskSlice";
import classes from "./TaskDetails.module.css";
import pen from "../../assets/images/pen.png";
import { useEffect, useState } from "react";
import InputText from "../UI/InputText";
import TexArea from "../UI/TextArea";
import Button, { ButtonType } from "../UI/Button";
import { useDispatch } from "react-redux";

interface TaskDetailsProps {
  title: string;
  description: string;
  responsiblePerson: string;
  status: taskStatus;
  id: number;
  onCloseModal: () => void;
}

const TaskDetails = ({ title, description, responsiblePerson, status, id, onCloseModal }: TaskDetailsProps) => {
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskResponsiblePerson, setTaskResponsiblePerson] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isTaskTitleError, setIsTaskTitleError] = useState(false);
  const [isTaskResponsiblePersonError, setIsTaskResponsiblePersonError] = useState(false);
  const [isDescriptionError, setDescriptionError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  const enableEditHandler = () => {
    setIsEditEnabled(true);
  };

  const inputTitleHandler = (title: string) => {
    setTaskTitle(title);
    setIsTaskTitleError(!title.trim().length);
  };

  const inputPersonHandler = (person: string) => {
    console.log(person);
    setTaskResponsiblePerson(person);
    setIsTaskResponsiblePersonError(!person.trim().length);
  };

  const inputDescriptionHandler = (description: string) => {
    setTaskDescription(description);
    setDescriptionError(!description.trim().length);
  };

  useEffect(() => {
    setTaskTitle(title);
    setTaskResponsiblePerson(responsiblePerson);
    setTaskDescription(description);
  }, [title, responsiblePerson, description]);

  useEffect(() => {
    if (taskTitle.trim().length && taskResponsiblePerson.trim().length && taskDescription.trim().length) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [taskTitle, taskResponsiblePerson, taskDescription]);

  const editTaskHandler = () => {
    dispatch(editTask({ id, title: taskTitle, responsiblePerson: taskResponsiblePerson, description: taskDescription, status }));
    onCloseModal();
  };

  return (
    <>
      <div className={classes.wrapper}>
        {!isEditEnabled && <img src={pen} alt="pen" className={classes.pen} onClick={enableEditHandler} />}
        {!isEditEnabled ? (
          <>
            <span>
              title: <span className={classes.title}>{title}</span>
            </span>
            <br />
            <span>
              responsible person: <span className={classes.responsible_person}>{responsiblePerson}</span>
            </span>
            <br />
            <span>
              status: <span className={classes.responsible_person}>{status}</span>
            </span>
            <br />
            <span>
              description: <p className={classes.description}>{description}</p>
            </span>
            <br />
          </>
        ) : (
          <>
            <InputText label="Task Title" type="text" onInput={inputTitleHandler} isError={isTaskTitleError} value={taskTitle} />
            <InputText
              label="Responsible Person"
              type="text"
              onInput={inputPersonHandler}
              isError={isTaskResponsiblePersonError}
              value={taskResponsiblePerson}
            />
            <TexArea label="Task Description" onInput={inputDescriptionHandler} isError={isDescriptionError} value={taskDescription} />
            <div className={classes.button}>
              <Button label="Edit Task" buttonType={ButtonType.DARK_MODE} onClickButton={editTaskHandler} isDisabled={isButtonDisabled} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TaskDetails;
