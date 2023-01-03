import React from "react";
import dropStyle from "./dropdown.module.css";
import { ReactComponent as KebabMenu } from "../../../assets/icons/flickr2.svg";

const DropDown = ({ onClickDropDown, body, right }) => {
  return (
    <div
      className={`${dropStyle.block} ${right ? dropStyle.right : ""}`}
      onClick={onClickDropDown}
    >
      {body}
    </div>
  );
};

const MeatBall = ({ children, onCloseDropDown, right }) => {
  const [show, setShow] = React.useState(false);
  const onClickMeatBalls = (e) => {
    setShow(true);
  };
  React.useEffect(() => {
    setShow(false);
  }, [onCloseDropDown]);

  return (
    <div className={dropStyle.box}>
      {show && (
        <div
          className={dropStyle.ten}
          onClick={() => {
            setShow(false);
          }}
        ></div>
      )}
      {show && (
        <DropDown
          onClickDropDown={onClickMeatBalls}
          body={children}
          right={right}
        />
      )}
      <KebabMenu onClick={onClickMeatBalls} />
    </div>
  );
};

export default MeatBall;
