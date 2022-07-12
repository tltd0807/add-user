import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Modal.module.css";
const Modal = (props) => {
  return (
    <div className={styles["overlay"]}>
      <Card className={styles["modal-card"]}>
        <div className={styles["modal-header"]}>INVALID INPUT</div>
        <div className={styles["modal-message"]}>{props.messageError}</div>
        <Button onClick={props.closeModal}>OK</Button>
      </Card>
    </div>
  );
};

export default Modal;
