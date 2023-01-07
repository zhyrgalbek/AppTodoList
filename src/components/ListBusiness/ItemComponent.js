import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
function helpArr(text) {
  const arr = text.split(":");
  return `${arr[0]}:${arr[1]}`;
}
const ItemComponent = ({ name, razmer, vremya, timeout, out, variant }) => {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <Stack direction="row" alignItems="center">
          {/* <Typography variant="h6">name:</Typography> */}
          <Typography
            sx={{
              padding: "10px",
              textAlign: "left",
              width: "250px",
            }}
          >
            {name}
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center">
          {/* <Typography variant="h6">razmer:</Typography> */}
          <Typography
            sx={{
              padding: "10px",
              textAlign: "left",
              width: "100px",
            }}
          >
            {razmer}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          {/* <Typography variant="h6">vermya:</Typography> */}
          <Typography
            sx={{
              padding: "10px",
              textAlign: "left",
              width: "100px",
            }}
          >
            {variant === "hr" ? vremya : helpArr(vremya)}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          {/* <Typography variant="h6">vermya:</Typography> */}
          <Typography
            sx={{
              padding: "10px",
              textAlign: "left",
              width: "100px",
            }}
          >
            {out}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default ItemComponent;
