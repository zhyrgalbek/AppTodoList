import React from "react";
import styles from "./Guest.module.css";
// import { Outlet } from "react-router";
import Header2 from "./header2";
import Todo2 from "../containers/TodoPage/Todo2";

const Main = () => {
  return (
    <div className={styles.container}>
      <Header2 />
      <main className={styles.main}>
        <Todo2 />
      </main>
    </div>
  );
};

export default Main;
