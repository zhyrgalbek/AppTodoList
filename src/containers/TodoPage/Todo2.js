import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import FormAdd from "../../components/formAdd/FormAdd";
import ListBusiness from "../../components/ListBusiness/ListBusiness";

const Todo2 = () => {
  const { list, listTwo } = useSelector((store) => store.todo);
  return (
    <>
      <Grid container spacing="20px" sx={{ marginBottom: "50px" }}>
        <Grid item xs="12" container justifyContent="center">
          <FormAdd />
        </Grid>
        <Grid
          item
          xs="12"
          container
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <ListBusiness list={list} variant="list" />
          <ListBusiness list={listTwo} variant="listTwo" />
        </Grid>
      </Grid>
    </>
  );
};

export default Todo2;
