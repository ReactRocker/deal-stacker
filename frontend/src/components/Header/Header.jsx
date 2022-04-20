import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#4f4b6b",
      }}
    >
      <Toolbar>
        <Link to="/" style={{ display: "flex" }}>
          <img src="logo.png" alt="logo" style={{ maxWidth: "150px" }} />
        </Link>
        <Button
          sx={{
            ml: "auto",
            color: "primary.contrastText",
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
