import styles from "./FormInput.module.css";
import Button from "../UI/Button/Button";
import { useState } from "react";
const FormInput = (props) => {
  const [newUserName, setNewUserName] = useState("");
  const [newUserAge, setNewUserAge] = useState("");

  // lấy giá trị ở input mà ng dùng nhập để lưu lại
  const userNameChangeHandler = (event) => {
    setNewUserName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    setNewUserAge(event.target.value);
  };
  const SubmitHandler = (event) => {
    event.preventDefault();
    if (newUserAge === "" || newUserName === "") {
      props.onErrorHandler(
        "Please enter a valid name and age (non-empty values)"
      );
      return;
    } else if (Number(newUserAge) <= 0) {
      props.onErrorHandler("Please enter a valid age (>0)");
      return;
    }
    const newUser = {
      id: Math.random().toString(),
      userName: newUserName,
      age: +newUserAge,
    };
    props.onSaveUser(newUser);
    setNewUserAge("");
    setNewUserName("");
  };
  return (
    <form className={styles.form} onSubmit={SubmitHandler}>
      <div className={styles["form-input"]}>
        <label>User Name</label>
        <input
          type="text"
          placeholder="Please enter your name"
          onChange={userNameChangeHandler}
          value={newUserName}
        ></input>
      </div>
      <div className={styles["form-input"]}>
        <label>User Age (Year)</label>
        <input
          type="number"
          placeholder="Please enter your age"
          onChange={userAgeChangeHandler}
          value={newUserAge}
        ></input>
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default FormInput;
