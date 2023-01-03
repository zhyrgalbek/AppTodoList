import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef(({ name, fullWidth, ...props }, ref) => {
  return (
    <label className={`${styles.label} ${fullWidth && styles.fullWidth}`}>
      {name}
      <input {...props} className={`${styles.input} ${props.className}`} />
    </label>
  );
});

export default Input;
