import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import closeIcon from "../../assets/images/close.png";

const portalElement = document.getElementById("portal-root")!;

interface BackdropProps {
  closeModal: () => void;
}

const Backdrop = ({ closeModal }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={closeModal} />;
};

interface ModalOverlayProps {
  children: JSX.Element;
  closeModal: () => void;
}

const ModalOverlay = ({ children, closeModal }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.close_modal}>
        <img src={closeIcon} alt="close-icon" onClick={closeModal} />
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

interface ModalProps {
  children: JSX.Element;
  closeModal: () => void;
}

const Modal = ({ children, closeModal }: ModalProps) => {
  return (
    <>
      {createPortal(<Backdrop closeModal={() => closeModal()} />, portalElement)}
      {createPortal(<ModalOverlay closeModal={() => closeModal()}>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
