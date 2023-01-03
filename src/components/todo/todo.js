import React, { useState } from "react";
import Button from "../../components/UI/Button/Button";
import Form from "../../components/card/form/Form";
import Input from "../../components/UI/input/Input";
import style from "./todo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addText, getText } from "../../store/slices/todoSlices";
import Modal from "../../components/Modal/Modal";
import Item from "./Item";
import ItemDescription from "./ItemDescription";
import EditForm from "../../components/Modal/EditForm";

const Todo = () => {
  const [value, setValue] = React.useState();
  const [textId, setTextId] = useState();
  const { list, status } = useSelector((store) => store.todo);
  const { token } = useSelector((store) => store.auth);
  const [showModal, setShowModal] = React.useState(false);
  const dispatch = useDispatch();
  const onSubmitText = (e) => {
    e.preventDefault();
    if (value.length <= 0) {
      alert("пишите текст!");
      return;
    }
    dispatch(
      addText({
        uid: token,
        text: value,
        date: Date.now(),
      })
    );
    setValue("");
  };

  React.useEffect(() => {
    if (status !== "rejected" && status !== "pending") {
      dispatch(getText(token));
    }
  }, [status, dispatch, token]);
  return (
    <div>
      {/* <Timer /> */}
      {/* <Modal>
        <ItemDescription />
      </Modal> */}
      <Form name="Todo list" onSubmit={onSubmitText}>
        <Input
          name="Введите текст"
          type="text"
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button>Добавить</Button>
      </Form>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <EditForm text={textId.text} id={textId.id} />
        </Modal>
      )}
      <ul className={style.block}>
        {list?.map((el) => (
          <Item
            id={el.id}
            text={el.text}
            setShowModal={setShowModal}
            setTextId={setTextId}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
