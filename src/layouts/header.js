import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Profile from "../containers/profile/profile";
import styles from "./header.module.css";

const Header = () => {
  const { email, token } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const onClickTodo = () => {
    navigate("/todo");
  };
  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className={styles.block}>
      <h2 onClick={onClickTodo} className={styles.logo}>
        Todo
      </h2>
      {email && <Profile />}
    </div>
  );
};

export default Header;
