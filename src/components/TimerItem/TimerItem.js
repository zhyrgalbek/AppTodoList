import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/slices/todoSlices";

const TimerItem = ({ Hours, Minutes, time, elem }) => {
  const { list } = useSelector((store) => store.todo);
  const [number, setNumber] = useState(0);
  const [timerSec, setTimerSec] = useState(0);
  const [stop, setStop] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimerSec((prev) => +Hours * 60 * 60 + +Minutes * 60);
    setStop(+Hours * 60 * 60 + +Minutes * 60 + 10);
  }, []);
  useEffect(() => {
    if (number === 10) {
      dispatch(todoActions.setListTwo(elem));
      return;
    }
    const el = list.find((item) => item.id === elem.id);
    let timer = "";
    if (el) {
      timer = setInterval(() => {
        setNumber((prev) => +prev + 1);
        setTimerSec((prev) => +prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [dispatch, elem, number]);
  const date = new Date();
  return (
    <div>
      {/* {`sec: ${number}`} */}
      {/* {` timer: ${timerSec}`} */}
      {/* {` stop: ${stop}`} */}
    </div>
  );
};

export default TimerItem;
