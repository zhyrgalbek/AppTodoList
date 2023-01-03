import { Routes } from "react-router";
import { Route } from "react-router";
import Main from "../layouts/main";
import React from "react";
import Timer from "../containers/timer/timer";
import Todo2 from "../containers/TodoPage/Todo2";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/todo" element={<Todo2 />} />
        <Route path="/timer" element={<Timer />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
