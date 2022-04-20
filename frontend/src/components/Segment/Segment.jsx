import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSegment = styled(Box)(({ theme }) => ({
  border: "1px solid #231e4638",
  borderRadius: "0.28571429rem",
  padding: "15px",
  margin: "15px 0 15px",
  ".MuiTypography-root": {
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    marginBottom: "7px",
    [theme.breakpoints.down(376)]: {
      fontSize: "1rem",
    },
  },
  ".MuiBox-root": {
    display: "flex",
    flexWrap: "wrap",
    margin: "-10px",
    [theme.breakpoints.down("md")]: {},
    ".MuiTextField-root": {
      margin: "10px 5px 5px 5px",
      width: "calc(100% / 4 - 10px)",
      [theme.breakpoints.down("md")]: {
        width: "calc(100% / 3 - 10px)",
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% / 2 - 10px)",
      },
      [theme.breakpoints.down(427)]: {
        width: "calc(100% - 10px)",
      },
      ".MuiInputLabel-root": {
        [theme.breakpoints.down(376)]: {
          fontSize: ".82rem",
        },
      },
    },
  },
}));

const Segment = ({ children, title = "" }) => {
  return (
    <StyledSegment>
      <Typography variant="h6">{title}</Typography>
      <Box>{children}</Box>
    </StyledSegment>
  );
};

export default Segment;
