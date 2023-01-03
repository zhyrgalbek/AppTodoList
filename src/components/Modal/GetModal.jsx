import { Modal, Paper } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#fff",
  // border: "2px solid #000",
  boxShadow: 24,
  padding: "20px",
};

const GetModal = ({ open, handleClose, component }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper style={style}>{component}</Paper>
    </Modal>
  );
};

export default GetModal;
