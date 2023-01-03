import { Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const ItemComponent = ({ name, razmer, vremya }) => {
  return (
    <Paper sx={{ padding: "15px" }} elevation={5}>
      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <Typography variant="h6">name:</Typography>
        <Typography
          sx={{
            // border: "1px solid red",
            paddingLeft: "10px",
            paddingTop: "2px",
          }}
        >
          {name}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <Typography variant="h6">razmer:</Typography>
        <Typography
          sx={{
            // border: "1px solid red",
            paddingLeft: "10px",
            paddingTop: "2px",
          }}
        >
          {razmer}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="flex-start" alignItems="center">
        <Typography variant="h6">vremya:</Typography>
        <Typography
          sx={{
            // border: "1px solid red",
            paddingLeft: "10px",
            paddingTop: "2px",
          }}
        >
          {vremya}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ItemComponent;
