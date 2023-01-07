import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/slices/todoSlices";
import { getLocalStorage } from "../../utils/helpers/helpers";

const FormAdd = () => {
  const [input, setInput] = useState("");
  const [razmer, setRazmer] = useState("");
  const dispatch = useDispatch();
  const onClickSubmit = (e) => {
    e.preventDefault();
    if (input.length <= 0) {
      alert("Пишите текст!");
      return;
    }
    const date = new Date();
    const out = date.getHours() + 1;
    dispatch(
      todoActions.setList({
        id: Math.random().toString(),
        name: input,
        razmer: razmer,
        vremya: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
        out: `${out}:${date.getMinutes()}`,
        date: `${date.getDay()}`,
      })
    );
    setInput("");
    setRazmer("");
    console.log(getLocalStorage("users"));
  };
  return (
    <Card sx={{ width: "500px" }}>
      <CardContent>
        <CardContent>
          <Box component="form" onSubmit={onClickSubmit}>
            <Typography variant="h2" sx={{ fontSize: "2.5rem" }}>
              Todo list
            </Typography>
            <Stack direction="row" alignItems="flex-end" spacing="20px">
              <TextField
                variant="standard"
                label="аты жону"
                type="text"
                sx={{ flexGrow: "1" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <TextField
                variant="standard"
                label="размери"
                type="text"
                sx={{ flexGrow: "1" }}
                value={razmer}
                onChange={(e) => setRazmer(e.target.value)}
              />
              <Button variant="outlined" type="submit">
                Add
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default FormAdd;
