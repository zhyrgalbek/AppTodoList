import { IconButton, Menu, SvgIcon, MenuItem } from "@mui/material";
import React from "react";

const DropDown = ({
  icon,
  items,
  text,
  textId,
  razmer,
  vremya,
  variant,
  onCloseModal,
  handleOpenModal,
  setModalInfo,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const massiv = children.split(",");
  return (
    <>
      <IconButton onClick={handleClick}>
        <SvgIcon>{icon}</SvgIcon>
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map((elem) => {
          return (
            <MenuItem
              onClick={() =>
                elem.onClick(
                  text,
                  textId,
                  razmer,
                  vremya,
                  variant,
                  handleClose,
                  onCloseModal,
                  handleOpenModal,
                  setModalInfo
                )
              }
              {...props}
            >
              {elem.text}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default DropDown;
