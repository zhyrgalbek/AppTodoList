import React from "react";
import style from "./todo.module.css";
import MeatBall from "../UI/meatballs/meatballs";
import Button from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/slices/todoSlices";
import { deleteText } from "../../store/slices/todoSlices";

const Item = ({ id, text, setShowModal, setTextId }) => {
  const [onCloseDropDown, setOnCloseDropDown] = React.useState(false);
  const dispatch = useDispatch();
  const onClickEdit = ({ text, id }) => {
    setOnCloseDropDown((prev) => !prev);
    setShowModal(true);
    dispatch(todoActions.setShowDropDown({ show: false }));
    setTextId({ text, id });
  };
  const onDelete = (id) => {
    setOnCloseDropDown((prev) => !prev);
    dispatch(deleteText(id));
  };
  return (
    <li key={id} className={style.item}>
      <p>{text}</p>
      <div>
        <MeatBall onCloseDropDown={onCloseDropDown}>
          <Button onClick={() => onClickEdit({ text: text, id: id })}>
            редактировать
          </Button>
          <Button onClick={() => onDelete(id)}>Удалить</Button>
        </MeatBall>
      </div>
    </li>
  );
};

export default Item;
