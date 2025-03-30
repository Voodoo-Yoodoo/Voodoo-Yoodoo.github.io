import { Grid } from "@mui/material";
import { Link } from "@tanstack/react-router";
import React from "react";

const date = new Date().getFullYear();

const Copyright = () => {
  return (
    <Grid className="flex flex-col items-center gap-3 text-sm">
      <p>
        Website created by{" "}
        <Link to="https://vonschappler.github.io" target="_blank">
          von Schappler
        </Link>
      </p>
      <p>&copy; {date}</p>
    </Grid>
  );
};

export default Copyright;
