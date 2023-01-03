import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, fullWitdh, variant, ...props }) => {
  return (
    <button
      className={`${styles.button} ${fullWitdh && styles.fullWitdh} ${
        variant === "two" ? styles.two : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
