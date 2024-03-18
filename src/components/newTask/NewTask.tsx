import Button, { ButtonType } from "../UI/Button";
import InputText from "../UI/InputText";
import TexArea from "../UI/TextArea";
import classes from "./NewTask.module.css";

const NewTask = () => {
  const addNewTaskHandler = () => {
    console.log("Add new task");
  };

  return (
    <>
      <div className={classes.wrapper}>
        <h1>Add New Task</h1>
        <div className={classes.input_wrapper}>
          <InputText label="Task Title" type="text" />
          <InputText label="Responsible Person" type="text" />
          <TexArea label="Task Description" />
          <div className={classes.button}>
            <Button label="Add New Task" buttonType={ButtonType.DARK_MODE} onClickButton={addNewTaskHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewTask;
