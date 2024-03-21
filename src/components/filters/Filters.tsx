import classes from "./Filters.module.css";
import Search from "../UI/Search";
import Checkbox from "../UI/Checkbox";
import { taskStatus } from "../../store/TaskSlice";
import { useDispatch } from "react-redux";
import { setStatusFilter } from "../../store/TaskSlice";
import Button from "../UI/Button";
import { ButtonType } from "../UI/Button";
import Modal from "../UI/Modal";
import { useState } from "react";
import NewTask from "../newTask/NewTask";

const Filters = () => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onCheckHandler = (status: taskStatus) => {
    dispatch(setStatusFilter(status));
  };

  const onAddTaskHandler = () => {
    setIsOpenModal(false);
  };

  const ModalContent = (
    <Modal
      closeModal={() => {
        setIsOpenModal(false);
      }}
    >
      <NewTask onAddTask={onAddTaskHandler} />
    </Modal>
  );

  return (
    <>
      {isOpenModal && ModalContent}
      <div className={classes.filters}>
        <Search />
        <hr />
        <div className={classes.checkboxes}>
          <h1>
            <span>Filter by Status</span>
          </h1>
          <Checkbox id="in_progress" title="In Progress" onCheckStatus={onCheckHandler} statusType={taskStatus.PROGRESS} />
          <Checkbox id="done" title="Done" onCheckStatus={onCheckHandler} statusType={taskStatus.DONE} />
        </div>
        <div className={classes.new_task}>
          <Button
            label="New Task"
            buttonType={ButtonType.LIGHT_MODE}
            onClickButton={() => {
              setIsOpenModal(true);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Filters;
