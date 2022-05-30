import React from "react";
import { Box, Typography, Divider } from "@mui/material";
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
      width: "calc(100% / 4 - 11px)",
      [theme.breakpoints.down("md")]: {
        width: "calc(100% / 3 - 11px)",
      },
      [theme.breakpoints.down("sm")]: {
        width: "calc(100% / 2 - 11px)",
      },
      [theme.breakpoints.down(427)]: {
        width: "calc(100% - 11px)",
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
      <Divider sx={{ m: "0 0 15px 0" }} />
      <Box>{children}</Box>
    </StyledSegment>
  );
};

export default Segment;
