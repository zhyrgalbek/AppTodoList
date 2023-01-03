import React from "react";
import styles from "./timer.module.css";

function getNumber(number) {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
}

const Timer = () => {
  const date = new Date();
  const [time, setSeconds] = React.useState({
    hours: 0,
    minutes: 1,
    seconds: 0,
  });
  const [pause, setPause] = React.useState(false);
  const [input, setInput] = React.useState({
    minutes: "",
    hours: "",
    seconds: "",
  });
  const [procent, setProcent] = React.useState(60);
  React.useEffect(() => {
    if (time.hours <= 0 && time.minutes <= 0 && time.seconds <= 0) {
      return;
    }
    if (pause) {
      return;
    }
    const sec = setInterval(() => {
      setSeconds((prev) => {
        if (prev.minutes <= 0 && prev.hours > 0) {
          return {
            ...prev,
            hours: getNumber(prev.hours - 1),
            minutes: 59,
            seconds: 59,
          };
        }
        if (prev.seconds <= 0 && prev.minutes >= 0) {
          return {
            ...prev,
            minutes: getNumber(prev.minutes - 1),
            seconds: 59,
          };
        }
        return {
          ...prev,
          seconds: getNumber(prev.seconds - 1),
        };
      });
    }, 1000);
    return () => {
      clearInterval(sec);
    };
  }, [pause, time]);
  const onClickPaused = () => {
    setPause((prev) => !prev);
  };
  const onSumbitForm = (e) => {
    e.preventDefault();
    setSeconds((prev) => {
      return {
        ...prev,
        minutes: input.minutes,
        hours: input.hours,
        seconds: input.seconds,
      };
    });
    setProcent((prev) => input.minutes * 60);
    setInput(() => {
      return {
        minutes: "",
        hours: "",
      };
    });
  };
  const onChangeInput = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className={styles.timer}>
      {/* <div className={styles.timer__card}>1</div> */}
      <div className={styles.short}>
        <div
          className={styles.shortHighlight}
          style={{
            width: `${
              100 - ((time.minutes * 60 + time.seconds) * 100) / procent
            }%`,
          }}
        ></div>
      </div>
      <div className={styles.block}>
        <div className={styles.timer__card}>
          <div className={styles.timer__cardInfo}>{time.hours}</div>
          <div className={styles.timer__cardHeader}>Hourse</div>
        </div>
        <div className={styles.timer__card}>
          <div className={styles.timer__cardInfo}>{time.minutes}</div>
          <div className={styles.timer__cardHeader}>Minutes</div>
        </div>
        <div className={styles.timer__card}>
          <div className={styles.timer__cardInfo}>{time.seconds}</div>
          <div className={styles.timer__cardHeader}>Seconds</div>
        </div>
        <button onClick={onClickPaused}>{pause ? "start" : "pause"}</button>
      </div>
      <div className={styles.block}>
        <form className={styles.form} onSubmit={onSumbitForm}>
          <div className={styles["item-100"]}>
            <label>minutes</label>
            <input
              type="number"
              value={input.minutes}
              name="minutes"
              onChange={onChangeInput}
            />
          </div>
          <div className={styles["item-100"]}>
            <label>hours</label>
            <input
              type="number"
              name="hours"
              value={input.hours}
              onChange={onChangeInput}
            />
          </div>
          <div className={styles["item-100"]}>
            <label>seconds</label>
            <input
              type="number"
              name="seconds"
              value={input.seconds}
              onChange={onChangeInput}
            />
          </div>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
};

export default Timer;
