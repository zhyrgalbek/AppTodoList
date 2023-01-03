import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router";

const Header2 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };
  const onClickItem = () => {
    navigate("/profile");
    closeMenu();
  };
  const onClickTodo = () => {
    navigate("/todo");
  };
  const onClickSignOut = () => {
    closeMenu();
  };
  return (
    <Container maxWidth="lg">
      <AppBar position="static" sx={{ mb: "30px" }}>
        <Toolbar>
          <Box sx={{ flexGrow: "1", textAlign: "left" }}>
            <Button sx={{ color: "#fff" }} onClick={onClickTodo}>
              <Typography variant="h6" component="div">
                Todo
              </Typography>
            </Button>
          </Box>
          <Box>
            <Button sx={{ color: "#fff" }} onClick={handleMenu}></Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={closeMenu}
            >
              <MenuItem sx={{ width: "150px" }} onClick={onClickItem}>
                Profile
              </MenuItem>
              <MenuItem sx={{ width: "150px" }} onClick={onClickSignOut}>
                Sign out
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header2;
