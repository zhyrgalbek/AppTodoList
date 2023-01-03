import styled from "@emotion/styled";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/slices/todoSlices";

const EditComponent = ({
  propsText,
  id,
  propsRazmer,
  vremya,
  onCloseModal,
  variant,
}) => {
  const [text, setText] = useState(propsText);
  const [razmer, setRazmer] = useState(propsRazmer);
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    if (variant === "list") {
      dispatch(
        todoActions.editItem({
          id,
          name: text,
          razmer: razmer,
          vremya,
        })
      );
    }
    if (variant === "listTwo") {
      dispatch(
        todoActions.editItemTwo({
          id,
          name: text,
          razmer: razmer,
          vremya,
        })
      );
    }
    onCloseModal();
  };
  return (
    <>
      <Box component="form" onSubmit={onSubmit}>
        <Stack spacing="30px">
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Edit text
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: "80px", display: "inline-block" }}>
              Аты жону:{" "}
            </Typography>
            <TextField
              variant="outlined"
              type="text"
              sx={{ flexGrow: "1", ml: "10px" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: "80px", display: "inline-block" }}>
              Размери:{" "}
            </Typography>
            <TextField
              variant="outlined"
              type="text"
              sx={{ flexGrow: "1", ml: "10px" }}
              value={razmer}
              onChange={(e) => setRazmer(e.target.value)}
            />
          </Stack>

          <Stack direction="row" justifyContent="center">
            <Button variant="outlined" type="submit">
              сохранить
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default EditComponent;

const TextArea = styled("textarea")`
  box-sizing: border-box;
  /* border: 1px solid red; */
  width: 100%;
  min-height: 150px;
  padding: 10px;
  /* margin: 0 30px; */
`;
