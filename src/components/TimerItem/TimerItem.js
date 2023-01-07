import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/slices/todoSlices";

function helpTimeG(text) {
  const arr = text.split(":");
  const hours = arr[0] * 60 * 60;
  const minutes = arr[1] * 60;
  const seconds = arr[2];
  return +hours + +minutes + +seconds;
}

const TimerItem = ({ id, vremya, day }) => {
  const [stop, setStop] = useState(Number(helpTimeG(vremya) + 30));
  const [g, setG] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const date = new Date();
    if (Number(day) !== Number(date.getDay())) {
      dispatch(todoActions.timeout({ id: id }));
      return;
    }
    if (g >= stop) {
      dispatch(todoActions.timeout({ id: id }));
      return;
    }
    const t = setInterval(() => {
      setG(
        helpTimeG(
          `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        )
      );
    }, 1000);
    return () => {
      clearInterval(t);
    };
  }, [g]);
  return <div>{/* {stop} {g} {day} */}</div>;
};

export default TimerItem;
