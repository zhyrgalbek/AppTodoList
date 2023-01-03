import React from "react";
import styles from "./Form.module.css";

const Form = ({ children, name, ...props }) => {
  return (
    <form className={styles.form} {...props}>
      <h2 className={styles.form__header}>{name}</h2>
      {children}
    </form>
  );
};

export default Form;
