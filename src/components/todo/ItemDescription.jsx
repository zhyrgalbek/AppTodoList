import React from "react";
import Input from "../../components/UI/input/Input";
import style from "./ItemDescription.module.css";

const ItemDescription = ({ titleValue, descriptionValue }) => {
  const [value, setValue] = React.useState({
    inputShow: false,
    descriptionShow: false,
    show: "",
    title: titleValue,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Faceretempora doloribus ratione fugiat, omnis illum et officia aliquam remperferendis nostrum eius laborum, porro dolor quod, dolorum nisi utoptio!",
  });
  
  const onClickValue = (e) => {
    // alert(e.target.id);
    setValue((prev) => {
      return { ...prev, [e.target.id]: true, show: e.target.id };
    });
  };
  const onCloseInput = (e) => {
    setValue((prev) => {
      return { ...prev, [prev.show]: false };
    });
  };
  const onChangeInput = (e) => {
    setValue((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };
  return (
    <div className={style.block}>
      <div className={style.item}>
        {(value.inputShow || value.descriptionShow) && (
          <div className={style.inputBackground} onClick={onCloseInput}></div>
        )}
        <div className={style.block}>
          {value.inputShow ? (
            <Input
              type="text"
              className={`${style.item} ${style.input}`}
              value={value.title}
              fullWidth
              onChange={onChangeInput}
              id="title"
              autoFocus
            />
          ) : (
            <h2 className={style.item} id="inputShow" onClick={onClickValue}>
              {value.title}
            </h2>
          )}
        </div>
      </div>
      <div className={style.item}>
        <div className={style.block}>
          {value.descriptionShow ? (
            <textarea
              className={style.textarea}
              value={value.description}
              onChange={onChangeInput}
              id="description"
              autoFocus
            />
          ) : (
            <p
              className={style.item}
              onClick={onClickValue}
              id="descriptionShow"
            >
              {value.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
