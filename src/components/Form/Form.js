import { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./Form.module.css";
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";
const USERARR = [
  { id: 1, userName: "Dat", age: 21 },
  { id: 2, userName: "To", age: 22 },
];
const Form = () => {
  const [userArr, setUserArr] = useState(USERARR);

  const saveUser = (newUser) => {
    setUserArr((userArr) => {
      return [newUser, ...userArr];
    });
  };
  return (
    <div>
      <Card className={styles["form-control"]}>
        <FormInput onSaveUser={saveUser} />
      </Card>
      <Card className={styles["form-control"]}>
        <FormOutput userArr={userArr} />
      </Card>
    </div>
  );
};

export default Form;
