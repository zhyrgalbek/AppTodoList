import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/slices/todoSlices";

const DeleteComponent = ({ onCloseModal, text, id, variant }) => {
  const dispatch = useDispatch();
  const onClickYes = (e) => {
    e.preventDefault();
    if (variant === "list") {
      dispatch(todoActions.removeItem({ id: id }));
    }
    if(variant === 'listTwo'){
      dispatch(todoActions.removeItemTwo({ id: id }));
    }
    onCloseModal();
  };
  const onClickNo = (e) => {
    e.preventDefault();
    onCloseModal();
  };
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Вы точно хотите удалить?
      </Typography>
      <Stack justifyContent="space-around" direction="row" sx={{ mt: "30px" }}>
        <Button variant="contained" sx={{ width: "150px" }} onClick={onClickNo}>
          Нет
        </Button>
        <Button
          variant="contained"
          sx={{ width: "150px" }}
          onClick={onClickYes}
        >
          Да
        </Button>
      </Stack>
    </Box>
  );
};

export default DeleteComponent;
