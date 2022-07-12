import styles from "./FormOutput.module.css";

const FormOutput = (props) => {
  return (
    <div className={styles["form-ouput-ul"]}>
      {props.userArr.map((user) => (
        <div
          key={user.id}
          className={styles["form-ouput-li"]}
        >{`${user.userName} (${user.age} years old)`}</div>
      ))}
    </div>
  );
};

export default FormOutput;
